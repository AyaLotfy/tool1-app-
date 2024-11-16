// src/plugins/axios.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my.1tool.com/suite/api', // Replace with your API base URL
  
  timeout: 10000,
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('auth_token'); // Get the token from localStorage or your preferred storage
    const token = 'Ypd8Tbrhbz1NolZElV6P1IstFc8Q00CK1fosuPAptxnhs3b3PdD4zOUUyJXbrZva0NAexy9RLdY1v9v63xbQIGTZOB0xkfnAIWujxpeAkSoF7mDWptdiwAjFNSJEYL64Uw2oXfZzGkmFQ9c1eXkadR2vqZkYsgN8JWgKXzvHlKU5oGi0tLqdJfU9GT0qLIsEbgkDJtTSdI9qaCE1YUy3u66eDenFDbGDZf7HLwQmxvRbtvGrB7LZ7ipSThqMQLY';

    if (token) {
        

        config.headers.Authorization = `Bearer ${token}`; // Add the token to the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle request errors
  }
);

export default apiClient;
