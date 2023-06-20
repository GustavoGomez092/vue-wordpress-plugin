import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AdminApp from './AdminApp.vue'

createApp(App).mount('#wp-vue')

createApp(AdminApp).mount('#wp-vue-options')
