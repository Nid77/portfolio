<script lang="ts" setup>
import '@/assets/style/projet.css'

import { computed, onMounted, ref } from 'vue'

import projetsData from '@/assets/json/projets.json'
import { type Projet } from '@/types/types'

const isFilterMenuOpen = ref(false)
const projets = ref<Projet[]>([])
const researchValue = ref<string>("")


onMounted(() => {
    projets.value = (projetsData as any).projets
})

const toggleFilterMenu = () => {
    //isFilterMenuOpen.value = !isFilterMenuOpen.value
}

function getImage(img: string, type: string) {
    var uri = "projets";
    if (type.includes('BUT')) {
        uri = "projets-BUT";
    }

    return new URL(`../assets/img/${uri}/${img}`, import.meta.url).href
}

const filterProjet = computed(() => {
    return projets.value.filter(projet => {
        return projet.nom.toLowerCase().includes(researchValue.value.toLowerCase())
    })
})

</script>


<template>
    <div class="p-20 text-white text-center">
        <h1 class="text-4xl md:text-6xl font-bold anim-entrance-text">Mes Projets</h1>
    </div>

    <div class="flex w-3/4 self-center ">
            <input type="text"
                class="w-full h-12 px-4 pr-12 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search..." 
                v-model="researchValue"
                />
            <button @click="toggleFilterMenu"
                class="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 14.414V20a1 1 0 01-1.447.894l-4-2A1 1 0 017 18v-3.586l-6.707-6.707A1 1 0 010 6V4a1 1 0 011-1z" />
                </svg>
                Filter
            </button>

            Filter menu
            <div v-if="isFilterMenuOpen"
                class="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
            </div>

        </div>

    <div class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-white">
            <div v-for="(projet, index) in filterProjet"
                class=" bg-[#242629] h-100 p-4 rounded flex flex-col items-center justify-center"
                :key="index">
                <img class=" max-h-80 object-fill" :src="getImage(projet.image, projet.type)" alt="logo du projet" />
                <h2>
                    {{ projet.nom }}
                </h2>

            </div>
        </div>
    </div>
</template>


<style>


</style>


