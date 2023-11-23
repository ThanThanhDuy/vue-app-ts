<script setup lang="ts">
  import HelloView from "../../components/Hello.vue";
  import { useCounterStore } from "../../stores/counter";

  const counter = useCounterStore();
</script>

<template>
  <div>
    <h3>Home page</h3>
    <HelloView msg="Vue3 - TypeScript - Vite - Vue-router - Pinia" />
    <h4>{{ counter.count }}</h4>
    <button @click="counter.increment">Inscrease</button>
  </div>
</template>
