<script lang="ts" setup>
import '@/assets/style/projet.css'

import { onMounted, ref } from 'vue'

import projetsData from '@/assets/json/projets.json'
import { type Projet } from '@/types/types'
import { initializeObserver } from '@/animation.ts'

const isFilterMenuOpen = ref(false)
const projets = ref<Projet[]>([])


onMounted(() => {
    projets.value = (projetsData as any).projets
    initializeObserver()
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

</script>


<template>
    <div class="p-20 text-white text-center">
        <h1 class="text-4xl md:text-6xl font-bold anim-entrance-text">Mes Projets</h1>
    </div>

    <div class="flex flex-col">
        <!-- <div class="flex w-3/4 self-center ">
            <input type="text"
                class="w-full h-12 px-4 pr-12 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search..." />
            <button type="submit"
                class="inset-y-0 right-0 flex items-center px-4 text-white bg-blue-500 border border-transparent rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-4.35-4.35m1.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                </svg>
            </button>
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

        </div> -->

        <div class="flex flex-col m-4 gap-4 ">
            <div v-for="(pro, index) in projets"
                class=" bg-[#242629] md:h-80 p-4 md:items-center text-white flex flex-col md:flex-row gap-4 md:gap-2  "
                :key="index">

                <div class="md:w-1/3 flex items-center justify-center p-4">
                    <img class="max-h-80 max-w-full" :src="getImage(pro.image, pro.type)" alt="logo du projet" />
                </div>
                <div class="md:w-2/3 h-full flex flex-col text-left md:border-l-4 border-white-500 ">
                    <h3 class="">NOM : {{pro.nom }} </h3>
                    <h3 class="">TYPE : {{ pro.type }} </h3>
                    
                </div>

            </div>
        </div>
    </div>
</template>


<style>
.img-projet {
    height: auto;
    object-fit: cover;
}

</style>


