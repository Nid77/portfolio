<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
</script>

<template>
  <header>
    <HeaderView />
  </header>

  <div class="content">
    <RouterView />
  </div>

  <footer>
    <FooterView />
  </footer>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
