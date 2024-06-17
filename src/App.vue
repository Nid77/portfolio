<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
</script>

<template>
  <header>
    <HeaderView />
  </header>

  <RouterView />

  <footer>
    <FooterView />
  </footer>
</template>

<style scoped></style>
