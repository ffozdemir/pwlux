"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { api } from "@/lib/api-client";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Kullanıcı bilgisini yükle
  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await api.users.getProfile();
      setUser(userData);
    } catch (err) {
      setError("Kullanıcı bilgisi yüklenemedi");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Component mount olduğunda kullanıcı bilgisini yükle
  useEffect(() => {
    // Eğer localStorage'da token varsa, kullanıcı bilgisini getir
    const token = localStorage.getItem("auth_token");
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  // Giriş yap
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.auth.login({ email, password });
      setUser(response.user);
      return true;
    } catch (err) {
      setError(err.message || "Giriş yapılırken bir hata oluştu");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Çıkış yap
  const logout = () => {
    api.auth.logout();
    setUser(null);
  };

  // Kayıt ol
  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.auth.register(userData);
      setUser(response.user);
      return true;
    } catch (err) {
      setError(err.message || "Kayıt olurken bir hata oluştu");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    register,
    isAuthenticated: !!user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
