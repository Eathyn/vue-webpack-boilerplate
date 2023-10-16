<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)

function increment() {
  count.value++
}
</script>

<template>
  <div>count: {{ count }}</div>
  <button @click="increment">increment</button>
</template>
