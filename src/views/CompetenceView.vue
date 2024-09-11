<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import competenceData from '@/assets/json/competence.json'
import technologiesData from '@/assets/json/technologies.json'
import TechnologiesList from '@/components/TechnologiesList.vue'
import '@/assets/style/competence.css'
import { Competence, Technology } from '@/types/types'

export default defineComponent({
  name: 'CompetenceList',
  components: {
    TechnologiesList
  },
  setup() {
    const competences = ref<Competence[]>([])
    const error = ref<string | null>(null)
    const activeCompetence = ref<string>("")

    const competence = ref<Competence>({
      nom_competence: "",
      liste: [],
      recul_reflexif: "",
      projets: [],
      bg_color: "",
      niveaux: [],
      mon_niveau: "",
      bg_second_color: ""
    });

    function getImage(img: string) {
      return new URL(`../assets/img/projets-BUT/${img}`, import.meta.url).href
    }

    const activeTab = ref('Langages');
    const activateTab = (tabName: string) => {
      activeTab.value = tabName;
      competence.value = competences.value.find(competence => competence.nom_competence === tabName) as Competence;
    };

    onMounted(() => {
      try {
        competences.value = (competenceData as any).competences
        competence.value = competences.value[0]

        
      } catch (err) {
        error.value = 'Erreur lors du chargement du fichier JSON'
      }
    })

    return {
      competences,
      error,
      technos: technologiesData as Record<string, Technology[]>,
      getImage,
      activeTab,
      activateTab,
      competence
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

  <div v-if="competences" class="flex-col border-2 border-white-500 self-center w-5/6 ">

    <div class="flex w-full">
      <button v-for="comp in competences" :key="comp.nom_competence" :id="comp.nom_competence"
        class="competence flex-1 text-3x1" :style="'background-color :' + comp.bg_color"
        :class="{ 'border-b-4 border-black-500 ': activeTab !== comp.nom_competence, 'border-t-4 border-l-4 border-r-4 border-white-500 ': activeTab === comp.nom_competence }"
        @click="activateTab(comp.nom_competence)">
        <h4>{{ comp.nom_competence }}</h4>
      </button>
    </div>

    <div class="flex flex-col p-4 gap-4 text-black border-b-4 border-t-4 border-r-4 border-white-500 "
      :style="'background-color :' + competence.bg_second_color">

      <div class="flex gap-4">
        <div class="flex flex-col md:w-2/3 text-left p-2 gap-4">
          <div class="">
            <h5 class="font-bold mb-2">Competences :</h5>
            <h5 v-for="item in competence.liste" :key="item">- {{ item }}</h5>
          </div>
        </div>

        <div class="flex flex-col md:w-1/3 text-black gap-2">
          <div v-for="(item, index) in competence.niveaux"
            class="flex flex-col items-center rounded border-2 border-black p-2 text-center flex-1"
            :style="'background-color:' + item.bg_color">

            <h4 class="font-bold flex text-2xl items-center justify-center mb-2">Niveau {{ index + 1 }} <div
                v-if="index.toString() == competence.mon_niveau" class="absolute backandforth ">⬅</div>
            </h4>
            <h5 class="m-4">{{ item.description }}</h5>
          </div>
        </div>

      </div>

    </div>


  </div>
  <div v-else class="text-3xl text-color-red">{{ error }}</div>


  <div class="flex items-center flex-col gap-2 mt-8">
    <h2 class="bg-[#17375e] rounded p-4 w-2/3 text-white text-left text-3xl self-center">
      <span class=" font-bold">Les technologies</span> que j'ai utilisé durant mes années d'études, mes experiences et
      mes
      projets personnels.
    </h2>
    <TechnologiesList :technologies="technos" />
  </div>
</template>



<style scoped></style>
