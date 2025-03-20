"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { api } from "@/lib/api-client";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);

  // Sepeti API'den yükle
  const fetchCart = async () => {
    try {
      setLoading(true);
      const cartData = await api.cart.get();
      setCart(cartData);
    } catch (error) {
      console.error("Sepet yüklenirken hata oluştu:", error);
      // Lokal sepet kullan
      const localCart = localStorage.getItem("cart");
      if (localCart) {
        try {
          setCart(JSON.parse(localCart));
        } catch (e) {
          setCart({ items: [], total: 0 });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Component mount olduğunda sepeti yükle
  useEffect(() => {
    fetchCart();
  }, []);

  // Sepet güncellendiğinde localStorage'a kaydet
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, loading]);

  // Sepete ürün ekle
  const addToCart = async (product, quantity = 1) => {
    try {
      // Backend henüz hazır değilse doğrudan state'i güncelle
      // Backend hazır olduğunda, önce API'ye istek gönderip sonra state'i güncelleyebilirsiniz
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId === product.id
      );

      if (existingItemIndex !== -1) {
        // Ürün zaten sepette, miktarını artır
        const updatedItems = [...cart.items];
        updatedItems[existingItemIndex].quantity += quantity;

        const newTotal = calculateTotal(updatedItems);
        setCart({ items: updatedItems, total: newTotal });
      } else {
        // Yeni ürün ekle
        const newItem = {
          id: Date.now().toString(), // Geçici ID, backend'den gelecek
          productId: product.id,
          product: product,
          quantity: quantity,
          price: product.discountPrice || product.price,
        };

        const newItems = [...cart.items, newItem];
        const newTotal = calculateTotal(newItems);
        setCart({ items: newItems, total: newTotal });
      }
    } catch (error) {
      console.error("Sepete ürün eklenirken hata oluştu:", error);
    }
  };

  // Sepetten ürün çıkar
  const removeFromCart = async (itemId) => {
    try {
      const updatedItems = cart.items.filter((item) => item.id !== itemId);
      const newTotal = calculateTotal(updatedItems);
      setCart({ items: updatedItems, total: newTotal });
    } catch (error) {
      console.error("Sepetten ürün çıkarılırken hata oluştu:", error);
    }
  };

  // Sepetteki bir ürünün miktarını güncelle
  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const updatedItems = cart.items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );

      const newTotal = calculateTotal(updatedItems);
      setCart({ items: updatedItems, total: newTotal });
    } catch (error) {
      console.error("Ürün miktarı güncellenirken hata oluştu:", error);
    }
  };

  // Sepeti temizle
  const clearCart = async () => {
    try {
      setCart({ items: [], total: 0 });
    } catch (error) {
      console.error("Sepet temizlenirken hata oluştu:", error);
    }
  };

  // Toplam hesapla
  const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      const itemPrice = item.product.discountPrice || item.product.price;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const value = {
    cart,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
