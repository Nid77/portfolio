<script lang="ts">
import '@/assets/style/header.css'
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'HeaderView',
  setup() {
    const isMenuOpen = ref(false);
    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }

    const windowWidth = ref(window.innerWidth);

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    function isMenuOpenFalse() {
      isMenuOpen.value = false;
    }

    return { toggleMenu, isMenuOpen, windowWidth, isMenuOpenFalse };
  }
}

/*
:class="{ 'translate-x-0': (isMenuOpen && windowWidth < 1096) || windowWidth >= 1096, 'translate-x-full': (!isMenuOpen && !(windowWidth >= 1096)) || windowWidth < 1096 }"
*/
</script>

<template>
  <div class="flex text-white justify-between p-4 w-full relative overflow-hidden">
    <div class="flex items-center gap-2">
      <img src="@/assets/img/icon/nid77.jpg" alt="Logo" class=" w-12 h-12 object-cover rounded-full" />
      <h1 class="text-3xl font-semibold ">Portfolio</h1>
    </div>


    <nav
      :class="{ 'translate-x-0': (isMenuOpen && windowWidth < 768) || windowWidth >= 768, 'translate-x-full': !isMenuOpen && !(windowWidth >= 768) }"
      class="fixed md:absolute transform transition-transform duration-300 right-0 h-auto w-3/4 md:flex md:w-auto md:h-auto text-white z-50 ">

      <ul
        class="flex flex-col items-center text-white font-bold text-2xl md:flex-row md:items-end mr-4 bg-gray-500 md:bg-[#16161a]">
        <li @click="isMenuOpenFalse" class="p-2">
          <RouterLink to="/">Accueil</RouterLink>
        </li>
        <li @click="isMenuOpenFalse" class="p-2">
          <RouterLink to="/projets">Projets</RouterLink>
        </li>
        <li @click="isMenuOpenFalse" class="p-2">
          <RouterLink to="/competences">Compétences</RouterLink>
        </li>
        <li @click="isMenuOpenFalse" class="p-2">
          <RouterLink to="/experiences">Experiences</RouterLink>
        </li>
        <li @click="isMenuOpenFalse" class="p-2">
          <RouterLink to="/contact">Contact</RouterLink>
        </li>

      </ul>
    </nav>

    <button @click="toggleMenu" class="relative text-white items-end z-50 md:hidden">
      <svg v-if="isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

  </div>
</template>

<style scoped></style>

