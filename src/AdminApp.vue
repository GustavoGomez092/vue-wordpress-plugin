<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {onBeforeMount, ref} from 'vue'
import axios from 'axios'

const data = ref()

const api = axios.create(
  {
    baseURL: `/wp-json/wp-vue/v1/`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-WP-Nonce': window.wpApiSettings.nonce
    }
  }
)

const getUser = async() => {
  const response = await api.get('user')
  console.log(response.data)
  data.value = response.data
}

onBeforeMount(async () => {
  await getUser()
})

</script>

<template>
  <div class="container mx-auto">
    <HelloWorld :msg="`Hello from the admin side ${data.data.display_name}!`" />
  </div>
  
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
