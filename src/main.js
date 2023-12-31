import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AdminApp from './AdminApp.vue'

if(document.querySelector('#WPVue')) createApp(App).mount('#WPVue')
if(document.querySelector('#WPVue-options')) createApp(AdminApp).mount('#WPVue-options')
