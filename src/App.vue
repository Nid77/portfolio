<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'
</script>

<template>
  <HeaderView />

  <div class="content">
    <RouterView />
  </div>

  <hr class="h-1 w-full mt-8" />

  <footer>
    <FooterView />
  </footer>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 3rem;
}
</style>
