//archivo principal de vue
import { createApp } from 'vue'
import App from './App.vue'
import axiosInstance from './plugins/axios'
// import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App);
app.config.globalProperties.$axios = axiosInstance;

createApp(App).mount('#app')
