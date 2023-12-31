<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})


</script>

<template>
  <div class="tw-container tw-mx-auto tw-mb-6">
    <h1 class="tw-text-green-600 tw-text-3xl">{{ msg }}</h1>
  </div>
</template>

<style scoped>

</style>
