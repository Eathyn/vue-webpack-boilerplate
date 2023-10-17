<template>
  <div>home</div>
  <div>count: {{ count }}</div>
  <div>double count: {{ doubleCount }}</div>
  <button @click="increment">increment</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store
</script>
