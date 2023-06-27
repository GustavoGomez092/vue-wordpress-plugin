<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {onBeforeMount, ref} from 'vue'
import axios from 'axios'

const data = ref()

const api = axios.create(
  {
    baseURL: `/wp-json/wp/v2/`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-WP-Nonce': window.wpApiSettings.nonce
    }
  }
)

const getPosts = async() => {
  const response = await api.get('posts')
  console.log(response.data)
  data.value = response.data
}

onBeforeMount(async () => {
  await getPosts()
})

</script>

<template>
  <div class="container mx-auto">
    <HelloWorld msg="Hello fron the client side" />
  </div>
  
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
