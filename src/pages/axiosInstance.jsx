import axios from 'axios';

// Axios instance oluşturma
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5028', // API base URL
});

// Interceptor ekleme
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
