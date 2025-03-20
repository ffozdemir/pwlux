"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";

// Örnek sepet verileri - Normalde API'den gelecek
const initialCartItems = [
  {
    id: "1",
    productId: "1",
    product: {
      id: "1",
      name: "Indigo Organik Pamuk Basic Tayt",
      price: 1575.0,
      imageUrl: "/images/tayt1.jpg",
    },
    quantity: 1,
    price: 1575.0,
  },
  {
    id: "2",
    productId: "3",
    product: {
      id: "3",
      name: "Bal Biker Şort",
      price: 1155.0,
      discountPrice: 808.5,
      imageUrl: "/images/tayt3.jpg",
    },
    quantity: 2,
    price: 808.5,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.product.discountPrice || item.product.price;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 1500 ? 0 : 150; // 1500 TL üzeri kargo bedava
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Sepetim</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium mb-4">Sepetiniz boş</h2>
          <p className="text-gray-600 mb-6">
            Sepetinizde ürün bulunmamaktadır.
          </p>
          <Link
            href="/products"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md transition"
          >
            Alışverişe Devam Et
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sepet Ürünleri */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ürün
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fiyat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Adet
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Toplam
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="relative h-16 w-16 flex-shrink-0">
                            <Image
                              src={item.product.imageUrl}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.product.discountPrice ? (
                          <div>
                            <span className="text-gray-400 line-through text-sm">
                              ₺{item.product.price.toFixed(2)}
                            </span>
                            <div className="text-pink-600 font-medium">
                              ₺{item.product.discountPrice.toFixed(2)}
                            </div>
                          </div>
                        ) : (
                          <div className="text-gray-900">
                            ₺{item.product.price.toFixed(2)}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center border rounded-md w-24">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 text-gray-600 hover:text-pink-600"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2 flex-1 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 text-gray-600 hover:text-pink-600"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                        ₺
                        {(
                          (item.product.discountPrice || item.product.price) *
                          item.quantity
                        ).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sipariş Özeti */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ara Toplam</span>
                  <span>₺{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo</span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Ücretsiz</span>
                  ) : (
                    <span>₺{shipping.toFixed(2)}</span>
                  )}
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Toplam</span>
                    <span>₺{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-pink-600 hover:bg-pink-700 text-white py-2 text-center rounded-md transition"
              >
                Ödeme Yap
              </Link>

              <Link
                href="/products"
                className="block w-full mt-3 text-center text-pink-600 hover:text-pink-700 transition"
              >
                Alışverişe Devam Et
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
