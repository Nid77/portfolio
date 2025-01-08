<template>
    <div v-if="projet" class="flex flex-col p-8 gap-6">
        <h1 class="text-white text-3xl">{{ projet.nom }}</h1>

        <div class="flex flex-col items-start ">

            <div class="p-4 self-center">
                <img class="max-h-96" :src="getImage(projet.image)" :alt="projet.nom" />

                <div class="flex">
                    <p>CATEGORIES :</p>
                    <div v-for="cat in categories">
                        <div class="border border-white rounded-full px-2 ml-2 text-white">
                            {{ cat }}
                        </div>
                    </div>
                </div>
            </div>



            <p>DESCRIPTION : {{ projet.description }}</p>

            <div v-if="technologies.length > 0" class="flex flex-col">
                <p>TECHNOLOGIES :</p>
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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { type Projet, type Technology } from '@/types/types';
import { getProjectByName } from '@/services/projects';
import { getTechnologyByName } from '@/services/technologies';

export default defineComponent({
    name: 'Project',
    setup() {
        const route = useRoute();
        const projectName = route.params.id;
        const projet = ref<Projet | null>(null);
        const technologies = ref<Technology[]>([]);
        const categories = ref<string[]>([]);

        projet.value = getProjectByName(projectName as string) as Projet;
        technologies.value = projet.value?.technologies.map(tech => getTechnologyByName(tech)) as Technology[];
        categories.value = projet.value?.categories;

        function getImage(img: string) {
            if (projet.value?.type)
                return new URL(`../assets/img/${projet.value.type.includes('BUT') ? "projets-BUT" : "projets"}/${img}`, import.meta.url).href
        }


        return { projet, getImage, technologies, categories };
    },
});

</script>