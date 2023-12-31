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
  <div class="tw-container tw-mx-auto my-20">
    <HelloWorld msg="Hello fron the client side" />
    <h2 class="tw-text-2xl tw-mb-2">Posts</h2>
    <div class="posts-container" v-if="data">
      <div class="single-post" v-for="(post, index) of data" :key="index">
        <h3 class="tw-text-xl">{{ post.title.rendered }}</h3>
        <p class="tw-text-[16px]" v-html="post.excerpt.rendered" />
      </div>
    </div>
  </div>
  
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
