<template>
    <div v-if="projet" class="flex flex-col p-8 gap-6">
        <h1>{{ projet.nom }}</h1>

        <div class="flex flex-col items-start gap-8">

            <div class="p-4 self-center flex flex-col items-center">
                <img class="max-h-96" :src="getImage(projet.image)" :alt="projet.nom" />

                <div class="flex justify-center items-center p-2">
                    <div v-for="cat in categories" class="border border-white rounded-full px-2 ml-2 h-auto text-white">
                        {{ cat }}
                    </div>
                </div>
            </div>


            <div class="flex flex-col items-start">
                <h2>DESCRIPTION</h2>
                <p>{{ projet.description }}</p>
            </div>

            <div v-if="technologies.length > 0" class="flex flex-col items-start">
                <h2>TECHNOLOGIES</h2>
                <div class="flex">
                    <a v-for="tech in technologies" :key="tech.nom" class="flex flex-col items-center">
                        <img :src="tech.image" class="h-24 w-24 mb-4 self-center" />
                        <h3>{{ tech.nom }}</h3>
                    </a>
                </div>
            </div>

        </div>
    </div>
    <div v-else>
        <h1 class="text-white text-3xl">Projet non trouvé</h1>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { type Projet, type Technology } from '@/types/types';
import { getProjectByName } from '@/services/projects';
import { getTechnologyByName } from '@/services/technologies';


const route = useRoute();
const projectName = route.params.id;
const projet = ref<Projet | null>(null);
const technologies = ref<Technology[]>([]);
const categories = ref<string[]>([]);

projet.value = getProjectByName(projectName as string) as Projet;
technologies.value = projet.value?.technologies.map(tech => getTechnologyByName(tech)).filter(tech => tech !== null) as Technology[];
categories.value = projet.value?.categories;

function getImage(img: string) {
    if (projet.value?.type)
        return new URL(`../assets/img/${projet.value.type.includes('BUT') ? "projets-BUT" : "projets"}/${img}`, import.meta.url).href
}

</script>
