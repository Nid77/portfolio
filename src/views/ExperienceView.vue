<script lang="ts">

import { defineComponent, ref, computed } from 'vue';
import 'flowbite';
import experienceData from '@/assets/json/experiences.json';

interface Experience {
  type: string
  poste: string
  entreprise: string
  date: string
  description: string
  competences: string[]
  retour: string
}

export default defineComponent({
  name: 'ExperienceList',
  setup() {
    const experiences = ref<Experience[]>([]);
    const error = ref<string | null>(null);
    try {
      experiences.value = (experienceData as any).experiences;
    } catch (err) {
      error.value = 'Erreur lors du chargement du fichier JSON';
    }

    return { experiences, error };
  },
});

</script>

<template>
  <div class="p-20 text-white text-center">
    <h1 class="text-6xl font-bold">Mes Experiences</h1>
  </div>

  <div class="exp ">
    <div class="text-white flex flex-row gap-8">
      <div class="w-1/3 flex items-center justify-center">
        <img src="@/assets/img/experience/GONEXA/Logo rectangle négatif.png" alt="logo de GONEXA" />
      </div>
      <div class="flex flex-col text-left w-2/3">
        <h3 class="">TYPE : STAGE </h3>
        <h3 class="">POSTE : Developpeur Fullstack</h3>
        <h3 class="">ENTREPRISE : GONEXA</h3>
        <h3>DATE : Du 15/04/2024 au 05/07/2024</h3>
        <h3>DESCRIPTION : Dev</h3>
      </div>
    </div>

    <!-- <div class="exp-projet grid grid-cols-3 gap-4">
      <img class="" src="@/assets/img/experience/GONEXA/page_statistiques.png"
        alt="capture d'ecran de la page des statistiques" />
      <img class="" src="@/assets/img/experience/GONEXA/page_liste_comptes.png"
        alt="capture d'ecran de la page des comptes" />
      <img class="" src="@/assets/img/experience/GONEXA/page_compte_client.png"
        alt="capture d'ecran de la page d'un compte client" />
    </div> -->
    <div class="flex gap-4">
      <button class="bg-[#cab2b2] p-4 rounded-lg">Voir les competences de mon BUT mise en oeuvre.</button>
      <button class="bg-[#cab2b2] p-4 rounded-lg">Voir le retour de mon experience</button>
    </div>





    <!-- <div class="exp-competences text-white grid grid-cols-3 gap-4">
      <div class="exp-competence">
        <h4>Compétence : Réalisation d’application</h4>
        <h5>
          C'est avec la maitise de plusieurs lanages tel que Java et le C qui m'ont aider a
          apprendre d'autre langages utilisé par l'entreprise. De plus j'ai realisé une documenttation du projet.
        </h5>
      </div>
      <div class="exp-competence">
        <h4>Compétence : Optimisation des applications informatiques</h4>
        <h5>Dans la recuperation des statistiques, recupérer toute les données necéssaires, puis appliquer du traitement
          etant donné que le nombre de donne n'est pas tres important.</h5>
      </div>
      <div class="exp-competence">
        <h4>Compétence : Gérer des données de l’informations</h4>
        <h5>
          Dans ce stage, je me suis retouve confronté a des bases de données (notamment celui de Saleforces et de Azure)
          afin de realiser un
          projet.
        </h5>
      </div>
      <div class="exp-competence">
        <h4>Compétence : Travailler dans une équipe informatique</h4>
        <h5>
          C'est avec ce stage que j'ai pu voir le travail en equipe avec plusieurs developpeur dans des projets.
          De plus, je me suis retrouvé avec un autre stagiaire sur le meme projet, j'ai pu
          experimenter le travail dans une equipe informatique.
        </h5>
      </div>
      <div class="exp-competence">
        <h4>Compétence : Administrer des systèmes informatiques communicants complexes</h4>
        <h5>Dans la patforme admin, je me suis retouvé a configurer des methodes de requetes (GET,POST,PU,DELETE) pour la
          partie backend du
          projet.</h5>
      </div>
      <div class="exp-competence">
        <h4>Compétence : Conduire un projet</h4>
        <h5>J'ai pu mettre en pratique la methode agile.</h5>
      </div>
    </div> -->


  </div>
</template>

<style scoped>
.exp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  border: 2px solid #03212f;
  background-color: #03212f;
  border-radius: 0.5rem;
  gap: 2rem;
  padding: 1rem;
  margin: 1rem;
}

.exp-competence h4 {
  font-size: 1.25rem;
  font-weight: bold;
}

.exp-competence {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  border: 0.5rem solid #cab2b2;
}

.exp-projet img {
  width: 100%;
  height: 100%;
}
</style>
