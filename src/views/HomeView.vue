<script setup lang="ts">
import '@/assets/style/acceuil.css'
</script>

<template>
  <div class="acceuil">
    <div class="head text-white h-screen w-full flex flex-col items-center gap-12 ">
      <h1 class="text-9xl p-4 bg-[#17375e] rounded-md mt-36 anim-text-pop-up-top ">Mon Portfolio</h1>
      <h2 class="text-4xl anim-typewriter ">Bienvenue sur mon portfolio</h2>
      <div class="scroll-down">
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

    </div>

    <section id="qui-suis-je"
      class="flex flex-row items-center h-screen justify-between p-4 gap-4 self-center text-white">
      <div class="flex flex-col items-center w-full">
        <img src="@/assets/img/nid77.jpg" alt="12" class="w-1/2 h-1/2 object-cover rounded-full mb-4 anim-roll-in-left" />
        <h2 class="text-5xl font-extrabold">Qui suis-je ?</h2>
      </div>
      <div>
        <p class="text-2xl text-left">
          Je m'appelle Rayan et je suis actuellement un
          <strong>étudiant en 2éme année de BUT INFORMATIQUE.</strong> Je suis une personne
          curieuse des nouvelles avancées informatiques. Ce que j'aime faire, c'est des projets
          personnels ou en équipe qui me permet d'en apprendre plus dans le développement
          informatique.
        </p>
      </div>
    </section>

    <section id="projet" class="projets flex flex-col items-center text-center">
      <h1 class="text-5xl font-extrabold text-white text-center">Quelques projets</h1>

      <section class="anim-fade-in">
        <h2 class="text-2xl font-extrabold text-white">Jeux-Vidéo</h2>

        <div class="projet-body">
          <a href="https://nid77.itch.io/mind-connexion">
            <img src="@/assets/img/gmtk2021.png" alt="icon Mind Connexion" />
            <h3>GMTK2021 - Mind Connexion</h3>
          </a>

          <a href="https://paperyka.itch.io/dicehead">
            <img src="@/assets/img/dice-head.png" alt="icon dicehead" />
            <h3>GMTK2022 - Dicehead</h3>
          </a>

          <a href="https://paperyka.itch.io/re-process">
            <img src="@/assets/img/re-process.png" alt="icon re-process" />
            <h3>GMTK2023 - Re-Process</h3>
          </a>
        </div>
      </section>

      <section class="anim-fade-in">
        <h2 class="text-2xl font-extrabold text-white">Personnel</h2>

        <div class="projet-body">
          <a href="#">
            <img src="@/assets/img/soniccolors2d.png" alt="image du projet" />
            <h3>Sonic Colors 2D Ultimate</h3>
          </a>

          <a href="#">
            <img src="@/assets/img/gestio.png" alt="image du projet" />
            <h3>Gestionnaire des Taches sur Go</h3>
          </a>
        </div>
      </section>

      <section class="anim-fade-in">
        <h2 class="text-2xl font-extrabold text-white">Scolaire</h2>

        <div class="projet-body">
          <a href="#">
            <img src="@/assets/img/projet-BUT/logo12cm3.png" alt="image du projet" />
            <h3>12cm3</h3>
          </a>

          <a href="#">
            <img src="@/assets/img/projet-BUT/site-basket.png" alt="image du projet" />
            <h3>Site web Basket</h3>
          </a>

          <a href="#">
            <img src="@/assets/img/projet-BUT/myweather.png" alt="image du projet" />
            <h3>MyWeather</h3>
          </a>
        </div>
      </section>
    </section>

    <section id="contact"
      class="flex flex-col text-center border border-white-500 bg-[#16161a] p-6 gap-4 w-3/4 self-center">
      <h2 class="text-3xl text-white font-extrabold">Me Contacter</h2>

      <p>Pour me contacter, vous pouvez m'envoyer un email !</p>

      <p class=""><i class="fas fa-envelope"></i> Email : ray.tcontact@protonmail.com</p>
    </section>
  </div>
</template>

<style scoped>
.acceuil {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
