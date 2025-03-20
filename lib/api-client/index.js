/* const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export async function fetchData(endpoint, options) {
  const url = `${API_BASE_URL}${
    endpoint.startsWith("/") ? endpoint : `/${endpoint}`
  }`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API isteği başarısız: ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Ürün API'leri
  products: {
    getAll: () => fetchData("/products"),
    getById: (id) => fetchData(`/products/${id}`),
    getByCategory: (categoryId) =>
      fetchData(`/products/category/${categoryId}`),
  },

  // Kategori API'leri
  categories: {
    getAll: () => fetchData("/categories"),
    getById: (id) => fetchData(`/categories/${id}`),
  },

  // Kullanıcı API'leri
  users: {
    login: (data) =>
      fetchData("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    register: (data) =>
      fetchData("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    getProfile: () => fetchData("/users/profile"),
  },

  // Sepet API'leri
  cart: {
    get: () => fetchData("/cart"),
    addItem: (data) =>
      fetchData("/cart/items", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    updateItem: (itemId, data) =>
      fetchData(`/cart/items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }),
    removeItem: (itemId) =>
      fetchData(`/cart/items/${itemId}`, {
        method: "DELETE",
      }),
  },

  // Sipariş API'leri
  orders: {
    getAll: () => fetchData("/orders"),
    getById: (id) => fetchData(`/orders/${id}`),
    create: (data) =>
      fetchData("/orders", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },
};

// Token yönetimi için saklama işlevleri
const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
};

const setToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
};

// Spring Boot API'si ile iletişim kurmak için fetch wrapper'ı
export async function fetchData(endpoint, options) {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  // Access token'ı ekleyelim
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options?.headers,
  };
  
  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });
    
    // 401 hatası alırsak token'ı silelim (süresi dolmuş olabilir)
    if (response.status === 401) {
      removeToken();
      // Kullanıcıyı giriş sayfasına yönlendirelim
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login';
      }
      throw new Error('Oturum süresi dolmuş veya geçersiz');
    }
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `API isteği başarısız: ${response.status}`);
    }
    
    // 204 (No Content) durumunda boş bir nesne döndürelim
    if (response.status === 204) {
      return {};
    }
    
    return response.json();
  } catch (error) {
    console.error('API hatası:', error);
    throw error;
  }
}

// Auth işlemleri güncellendi
export const api = {
  auth: {
    login: async (credentials) => {
      const response = await fetchData('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      
      if (response.token) {
        setToken(response.token);
      }
      
      return response;
    },
    register: async (userData) => {
      return fetchData('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
    },
    logout: () => {
      removeToken();
    },
  },
  
  // Diğer API endpoint'leri buraya eklenir...
};
 */