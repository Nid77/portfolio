<template>
  <div class="p-20">
    <h1 class="text-4xl md:text-6xl text-white text-center font-bold anim-entrance-text">Mes Compétences</h1>
  </div>

  <div class="bg-[#17375e] rounded p-4 w-2/3 text-white text-left text-3xl self-center">
    <h2>Référentiel de compétences du <span class=" font-bold">B.U.T Informatique.</span></h2>
    <h2><span class="font-bold">Parcours</span> Réalisation d’applications : conception, développement, validation.</h2>
  </div>

  <CompeteneceBUT />


  <div class="flex items-center flex-col gap-2 mt-8">
    <h2 class="bg-[#17375e] rounded p-4 w-2/3 text-white text-left text-3xl self-center">
      <span class=" font-bold">Les technologies</span> que j'ai utilisé durant mes années d'études, mes experiences et
      mes
      projets personnels.
    </h2>
    <TechnologiesList />
  </div>
</template>

<script setup lang="ts">
import TechnologiesList from '@/components/TechnologiesList.vue'
import CompeteneceBUT from '@/components/CompeteneceBUT.vue'
import '@/assets/style/competence.css'


</script>





<style scoped></style>
