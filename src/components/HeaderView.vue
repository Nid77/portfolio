<script setup lang="ts">
import '@/assets/style/header.css'
</script>

<template>
  <div class="flex items-center space-x-3 md:">
    <img src="@/assets/img/icon/nid77.jpg" alt="12" width="100px" class="w-12 h-12 object-cover rounded-full" />
    <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
  </div>

  <div class="items-end justify-between w-full md:flex md:w-auto">
    <!-- Mettre des RouterLink au lieu de la balise a -->
    <ul
      class="flex flex-col text-lg p-4 md:p-0 mt-4 font-extrabold md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li class="">
        <RouterLink to="/">Accueil</RouterLink>
      </li>
      <li class="">
        <RouterLink to="/projets">Projets</RouterLink>
      </li>
      <li class="">
        <RouterLink to="/competences">Compétences</RouterLink>
      </li>
      <li class="">
        <!-- class="block py-2 px-3 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" -->
        <RouterLink to="/experiences">Experiences</RouterLink>
      </li>
      <li class="">
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </div>

  <!-- <div class="social-icons">
    <a href="https://www.linkedin.com/in/rayan-t-b91a74250/" class="icon"><i class="fab fa-linkedin-in"></i></a>
  </div> -->
</template>
