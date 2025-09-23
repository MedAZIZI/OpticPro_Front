// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import api from '@/services/api'
import { useAuthStore } from '@/stores/auth'
// Import Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')

// appliquer token si existant
const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // récupérer user courant
  const auth = useAuthStore();
  api.get('/me')
     .then(res => auth.setUser(res.data))
     .catch(() => {
       localStorage.removeItem('token');
       delete api.defaults.headers.common['Authorization'];
     });
}





// createApp(App).use(router).mount('#app');
