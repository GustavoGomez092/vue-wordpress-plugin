<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {onBeforeMount, ref} from 'vue'
import axios from 'axios'
import frontendStore from '@/composables/frontendStore.js'

const data = ref()
const { state } = frontendStore()
const text = ref()

const api = axios.create(
  {
    baseURL: `/wp-json/wp/v2/`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }
)

const getPosts = async() => {
  const response = await api.get('posts')
  data.value = response.data
}

onBeforeMount(async () => {
  await getPosts()
})

</script>

<template>
  <div class="container mx-auto my-20">
    <HelloWorld msg="Hello fron the client side" />
    <h2 class="text-2xl mb-2">Posts</h2>
    <div class="posts-container" v-if="data">
      <div class="single-post" v-for="(post, index) of data" :key="index">
        <h3 class="text-xl">{{ post.title.rendered }}</h3>
        <p class="text-[16px]" v-html="post.excerpt.rendered" />
      </div>
    </div>
    <h2 class="text-2xl mb-2 mt-6">front-end store</h2>
    <p class="mb-1">{{ state }}</p>
    <input type="text" class="border border-black" v-model="text" />
    <div class="flex gap-6 mt-4">
      <button class="btn btn-blue" @click="state = {text}">set state</button>
    </div>
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
