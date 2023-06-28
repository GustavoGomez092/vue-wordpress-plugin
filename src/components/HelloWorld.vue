<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})


</script>

<template>
  <div class="container mx-auto mb-6">
    <h1 class="text-green-500 text-3xl">{{ msg }}</h1>
  </div>
</template>

<style scoped>

</style>
