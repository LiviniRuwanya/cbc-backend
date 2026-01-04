import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add error handling interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Helper function to open URLs in browser
const openInBrowser = (url) => {
  window.open(url, '_blank');
};

// Modified exports with browser opening capability
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  if (response.data.redirectUrl) {
    openInBrowser(response.data.redirectUrl);
  }
  return response;
};
export const register = (userData) => api.post('/auth/register', userData);
export const getProducts = () => api.get('/products');
export const getProduct = (id) => api.get(`/products/${id}`);
export const addToCart = (productId) => api.post('/cart', { productId });
export const getCart = () => api.get('/cart');

// Add new function to handle external links
export const openExternalLink = (url) => openInBrowser(url);
