<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="container mx-auto my-20">
    <h1 class="text-red-500 text-3xl">{{ msg }}</h1>
  </div>
</template>

<style scoped>

</style>
