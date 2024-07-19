<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import competenceData from '@/assets/json/competence.json'
import technologiesData from '@/assets/json/technologies.json'
import TechnologiesList from '@/components/TechnologiesList.vue'
import '@/assets/style/competence.css'

interface Competence {
  nom_competence: string
  liste: string[]
  recul_reflexif: string
  projets: Projet[]
  bg_color: string
}

interface Projet {
  nom_projet: string
  img: string
  description: string
}

interface Technology {
  nom: string
  lien: string
  image: string
  tags: string[]
  projets: string[]
}

export default defineComponent({
  name: 'CompetenceList',
  components: {
    TechnologiesList
  },
  setup() {
    const competences = ref<Competence[]>([])
    const error = ref<string | null>(null)
    const activeCompetence = ref<string | null>(null)

    onMounted(() => {
      try {
        competences.value = (competenceData as any).competences
      } catch (err) {
        error.value = 'Erreur lors du chargement du fichier JSON'
      }
    })

    const toggleDetail = (competenceName: string) => {
      if (activeCompetence.value === competenceName) {
        activeCompetence.value = null
      } else {
        activeCompetence.value = competenceName
      }
    }

    function getImage(img: string) {
      return new URL(`../assets/img/projet-BUT/${img}`, import.meta.url).href
    }

    return {
      competences,
      error,
      activeCompetence,
      toggleDetail,
      technos: technologiesData as Record<string, Technology[]>,
      getImage
    }
  }
})
</script>

<template>
  <div class="p-20">
    <h1 class="text-4xl md:text-6xl text-white text-center font-bold anim-entrance-text">Mes Compétences</h1>
  </div>

  <div class="bg-[#17375e] rounded p-4 w-2/3 text-white text-left text-3xl self-center">
    <h2>Référentiel de compétences du <span class=" font-bold">B.U.T Informatique.</span></h2>
    <h2><span class="font-bold">Parcours</span> Réalisation d’applications : conception, développement, validation.</h2>
  </div>

  <div v-if="competences" class="competences">
    <div v-for="competence in competences" :key="competence.nom_competence" :id="competence.nom_competence"
      class="competence text-3x1" :style="'background-color :' + competence.bg_color">
      <div>
        <h4>{{ competence.nom_competence }}</h4>
        <button class="font-bold defilement" type="button" :value="competence.nom_competence"
          @click="toggleDetail(competence.nom_competence)">
          {{ activeCompetence === competence.nom_competence ? '-' : '+' }}
        </button>
      </div>
      <hr :class="{ bar: activeCompetence === competence.nom_competence }" id="bar" />
      <div id="detail" :class="['', { visible: activeCompetence === competence.nom_competence }]">
        <div class="details flex flex-row">
          <div class="w-1/2">
            <h5 class="font-bold mb-2">Competences :</h5>
            <h5 v-for="item in competence.liste" :key="item">- {{ item }}</h5>
          </div>
          <div class="w-1/2 text-left">
            <h5 class="font-bold mb-2">Recul reflexif :</h5>
            <h5>
              {{ competence.recul_reflexif }}
            </h5>
          </div>
        </div>

        <hr :class="{ bar: competence.projets && competence.projets.length > 0 }" id="bar" />
        <h4 v-if="competence.projets && competence.projets.length > 0" class="self-center font-bold defilement text-4x1">
          Projets
        </h4>

        <div v-if="competence.projets && competence.projets.length > 0" class="projets">
          <div v-for="projet in competence.projets" class="projet" :key="projet.nom_projet">
            <img :src="getImage(projet.img)" alt="image du projet" />
            <p class="">{{ projet.nom_projet }}</p>
            <p>{{ projet.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="error" class="text-3xl text-color-red">{{ error }}</div>

  <div class="flex items-center flex-col gap-2 mt-8">
    <h2 class="bg-[#17375e] rounded p-4 w-2/3 text-white text-left text-3xl self-center">
      <span class=" font-bold">Les technologies</span> que j'ai utilisé durant mes années d'études, mes experiences et mes
      projets personnels.
    </h2>
    <TechnologiesList :technologies="technos" />
  </div>
</template>



<style scoped></style>
