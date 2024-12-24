<script lang="ts" setup>
import '@/assets/style/projet.css'

import { computed, onMounted, ref } from 'vue'

import { getProjects } from '@/services/projects';
import { type Projet } from '@/types/types'
import Combobox from '@/components/Combobox.vue'
import { it } from 'node:test';

const isFilterMenuOpen = ref(false)
const projets = ref<Projet[]>([])
const researchValue = ref<string>("")
const filterValue = ref<Array<String>>([])


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
    console.log("value filtre :",filterValue.value)
    return projets.value.filter(projet => {
        return filterValue.value.length > 0 ? filterValue.value.some((item) => item.includes(projet.type.toUpperCase())) : false ||
            researchValue.value !== "" ? projet.nom.toLowerCase().includes(researchValue.value.toLowerCase()) : false
    });

})


function setFilterValue(value: string[]) {
    filterValue.value = value
}

</script>


<template>
    <div class="p-20 text-white text-center">
        <h1 class="text-4xl md:text-6xl font-bold anim-entrance-text">Mes Projets</h1>
    </div>

    <div class="flex w-3/4 self-center gap-2 ">
        <div class="w-full ">
            <input type="text"
                class="w-full h-12 px-4 pr-12 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search..." v-model="researchValue" />
            <div>
                <p v-for="filter in filterValue">{{ filter }}</p>
            </div>
        </div>

        <Combobox :options="['BUT', 'PERSO']" @update-options="setFilterValue($event.value)" />

    </div>

    <div class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 text-white">
            <div v-for="(projet, index) in filterProjet" :key="index">
                <RouterLink :to="{ name: 'project', params: { id: projet.nom } }"
                    class=" bg-[#242629] h-full p-4 rounded-lg flex flex-col items-center justify-center flex-1">
                    <img class=" max-h-80 object-fill" :src="getImage(projet.image, projet.type)" alt="logo du projet" />
                    <h2 class="flex-end">
                        {{ projet.nom }}
                    </h2>
                </RouterLink>
            </div>
        </div>
    </div>
</template>


<style></style>


