<script lang="ts">

import { defineComponent, ref, computed } from 'vue';
import 'flowbite';
import experienceData from '@/assets/json/experiences.json';
import Modal from '@/components/ModalView.vue';
// import dayjs from 'dayjs'; // package a supprimer (pas utilisé)

interface Experience {
  type: string
  poste: string
  entreprise: string
  dateDebut: string
  dateFin: string
  description: string
  retour: string
  logo_entreprise: string
  bg_color: string
  competences: Competence[]
}

interface Competence {
  competence: string
  explication: string
}

export default defineComponent({
  name: 'ExperienceList',
  components: {
    Modal
  },
  setup() {
    const experiences = ref<Experience[]>([]);
    const error = ref<string | null>(null);
    try {
      experiences.value = (experienceData as any).experiences;
    } catch (err) {
      error.value = 'Erreur lors du chargement du fichier JSON';
    }
    const isModalOpen = ref(false);
    const activeExperience = ref<number>(0);

    function openModal(event: Event) {
      activeExperience.value = parseInt((event.target as HTMLButtonElement).value);
      isModalOpen.value = true;
    }
    function closeModal() {
      isModalOpen.value = false;
    }

    function getImage(img: string) {
      return new URL(`../assets/img/experience/${img}`, import.meta.url).href
    }

    return { experiences, error, isModalOpen, openModal, closeModal, getImage, activeExperience };
  },
});

</script>

<template>
  <div class="p-20 text-white text-center">
    <h1 class="text-4xl md:text-6xl font-bold anim-entrance-text">Mes Experiences</h1>
  </div>

  <div class="exps flex flex-col items-center">
    <div class="exp flex-col md:flex-row" v-for="(exp, index) in experiences" :key="index">
      <div class="text-white w-5/6 flex flex-col md:flex-row gap-4 md:gap-2 ">
        <div class="md:w-1/3 flex items-center justify-center md:border-r-4 border-white-500 p-4">
          <img :src="getImage(exp.logo_entreprise)" alt="logo de l'entreprise" />
        </div>
        <div class="flex flex-col text-left w-2/3">
          <h3 class="">TYPE : {{ exp.type }} </h3>
          <h3 class="">POSTE : {{ exp.poste }} </h3>
          <h3 class="">ENTREPRISE : {{ exp.entreprise }} </h3>
          <h3>DATE : Du {{ exp.dateDebut }} au {{ exp.dateFin }} </h3>
          <h3>DESCRIPTION : {{ exp.description }} </h3>
        </div>
      </div>
      <button @click="openModal" :disabled="new Date(exp.dateFin) > new Date()" :value="index"
        class="bg-[#cab2b2] md:w-1/6 float-right whitespace-nowrap p-4 rounded-lg">{{
          new Date(exp.dateFin) <= new Date() ? "En savoir plus →" : " Pas de detail" }} </button>
    </div>
  </div>


  <Modal :isOpen="isModalOpen" title="Detail de l'experience" @close="closeModal">
    <div class="exp-competences text-white grid grid-cols-3 gap-4">
      <div v-for=" cmp in experiences[activeExperience].competences" class="exp-competence">
        <h4>{{ cmp.competence }}</h4>
        <h5> {{ cmp.explication }}</h5>
      </div>
    </div>
  </Modal>
</template>

<style scoped>
.exp {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #03212f;
  background-color: #03212f;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  width: 90%;
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
  background-color: #03212f;
}
</style>
