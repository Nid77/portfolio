<template>
  <div class="acceuil">
    <div class="head text-white h-screen w-full flex flex-col items-center gap-12 ">
      <h1 class="text-4xl md:text-9xl p-4 bg-[#17375e] rounded-md mt-36 anim-text-pop-up-top ">Mon Portfolio</h1>
      <h2 class="text-3xl md:text-4xl anim-typewriter ">Bienvenue sur mon portfolio</h2>
      <div class="scroll-down">
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

    </div>

    <section id="qui-suis-je"
      class="flex flex-col md:flex-row items-center mb-48 md:justify-between p-4 gap-4 self-center text-white">
      <div class="flex flex-col items-center md:w-full">
        <img src="@/assets/img/icon/nid77.jpg" alt="12"
          class="w-1/2 md:h-1/2 object-cover rounded-full mb-4 anim-roll-in-left" />
        <h2 class="text-5xl font-extrabold anim-slide-in-left">Qui suis-je ?</h2>
      </div>
      <div class="anim-slide-in-right">
        <p class="text-2xl text-left">
          Je m'appelle Rayan et je suis actuellement un
          <strong>étudiant en BUT INFORMATIQUE.</strong> Je suis une personne
          curieuse des nouvelles avancées informatiques. Ce que j'aime faire, c'est des projets
          personnels ou en équipe qui me permet d'en apprendre plus dans le développement
          informatique.
        </p>
      </div>
    </section>

    <section id="projet" class="flex flex-col items-center text-center">
      <h1 class="text-5xl font-extrabold text-white text-center">Quelques projets</h1>
      <ProjectPresentation title="Jeux-vidéos" :projets="['Mind Connexion', 'Dicehead', 'Re-Process']" />
      <ProjectPresentation title="Scolaire" :projets="['12cm3', 'Aide décisionnelle centre de santé', 'MyWeather']" />
      <ProjectPresentation title="Personnel" :projets="['Gestio', 'Sonic Colors 2D Ultimate']" />
    </section>
    


  </div>
</template>

<script setup lang="ts">
import '@/assets/style/acceuil.css'
import ProjectPresentation from '@/components/ProjectPresentation.vue';


</script>

<style scoped>
.acceuil {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
