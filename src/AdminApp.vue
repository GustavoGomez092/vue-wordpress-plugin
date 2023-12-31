<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {onBeforeMount, ref} from 'vue'
import axios from 'axios'


const data = ref()


const api = axios.create(
  {
    baseURL: `/wp-json/WPVue/v1/`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-WP-Nonce': window.wpApiSettings.nonce
    }
  }
)

const getUser = async() => {
  const response = await api.get('user')
  data.value = response.data
}

onBeforeMount(async () => {
  await getUser()
})

</script>

<template>
  <div v-if="data" class="container mx-auto my-20">
    <HelloWorld :msg="`Hello from the admin side ${data.data.display_name}!`" />
  </div>
  
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}

</style>
