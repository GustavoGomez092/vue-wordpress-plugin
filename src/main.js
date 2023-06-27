import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AdminApp from './AdminApp.vue'

if(document.querySelector('#wp-vue')) createApp(App).mount('#wp-vue')
if(document.querySelector('#wp-vue-options')) createApp(AdminApp).mount('#wp-vue-options')
