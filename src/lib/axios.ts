import axios from 'axios';

// Create axios instance with default configuration
// Using relative path so requests go through Next.js proxy (same-origin)
const axiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for better error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - could redirect to login
      console.error('Unauthorized request:', error.config?.url);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
