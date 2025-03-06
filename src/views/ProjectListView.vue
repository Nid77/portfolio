<template>
    <div class="p-20 text-white text-center">
        <h1 class="text-4xl md:text-6xl font-bold anim-entrance-text">Mes Projets</h1>
    </div>

    <div class="flex w-3/4 self-center gap-2 ">
        <div class="w-full ">
            <input type="text"
                class="w-full h-12 px-4 pr-12 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search..." v-model="researchValue" />
            <div class="flex mt-4">
                <div v-for="filter in filterValue" :key="filter.valueOf()"
                    class="flex gap-4 p-2 border border-gray-300 rounded-md">
                    <p>{{ filter }}</p>
                    <button @click="OnDeleteFilter(filter as string)">
                        <Cross />
                    </button>
                </div>
            </div>
        </div>

        <Combobox :options="filterOptions" @updateOptions="setFilterValue($event)" />

    </div>

    <div class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 text-white">
            <div v-for="(projet, index) in filterProjet" :key="index" class="project h-full">
                <RouterLink :to="{ name: 'project', params: { id: projet.nom } }"
                    class="bg-[#242629] h-full p-4 rounded-lg flex flex-col items-center justify-between pt-8">
                    <div class="flex-1 flex items-center justify-center w-full">
                        <img class="max-h-80 w-full object-contain" :src="getImage(projet.image, projet.type)"
                            alt="logo du projet" />
                    </div>
                    <p class="text-center mt-4">
                        {{ projet.nom }}
                    </p>
                </RouterLink>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

import { computed, onMounted, ref } from 'vue'
import { getProjects } from '@/services/projects';
import { type Projet } from '@/types/types'
import Combobox from '@/components/Combobox.vue'
import Cross from '@/assets/svg/cross.svg'


const projets = ref<Projet[]>([])
const researchValue = ref<string>("")
const filterValue = ref<Array<String>>([])
const options = ['BUT', 'PERSO']


onMounted(() => {
    projets.value = getProjects()
})


function getImage(img: string, type: string) {
    return new URL(`../assets/img/${type.includes('BUT') ? "projets-BUT" : "projets"}/${img}`, import.meta.url).href
}

const filterProjet = computed(() => {
    if (researchValue.value === "" && filterValue.value.length === 0) {
        return projets.value
    }
    return projets.value.filter(projet => {
        let filterBool = filterValue.value.length > 0 ? filterValue.value.some(item => projet.type.toUpperCase().includes(item.toString())) : true
        let researchBool = researchValue.value !== "" ? projet.nom.toLowerCase().includes(researchValue.value.toLowerCase()) : true
        return filterBool && researchBool
    });

})


function setFilterValue(newValue: string) {
    filterValue.value.push(newValue)
}

function OnDeleteFilter(value: string) {
    filterValue.value = filterValue.value.filter((item) => item !== value)
}

const filterOptions = computed(() => {
    return options.filter((option) => {
        return !filterValue.value.includes(option)
    })
})

</script>

<style>
.project {
    transition: transform 0.3s ease-in-out;
}

.project:hover {
    transform: scale(1.03);
}

.project:not(:hover) {
    transition: transform 0.6s ease-out;
}
</style>
