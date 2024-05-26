import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:5028', // API'nizin temel URL'si
  headers: {
    'Content-Type': 'application/json'
  }
});

const api = {
  login: (email, password) => apiInstance.post('/login', { email, password }),
  register: (email, password) => apiInstance.post('/register', { email, password }),
  // Diğer API isteklerini buraya ekleyin
};

export default api;
