import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  // Aquí puedes añadir más configuraciones como headers por defecto
});

export default axiosInstance;