<template>
    <div v-if="projet">
        <h1>{{ projet.nom }}</h1>

        <div class="flex justify-center">
            <a :href="projet.lien">
                <img :src="getImage(projet.image)" :alt="projet.nom" />
                <h3>{{ projet.nom }}</h3>
            </a>

        </div>
    </div>
    <div v-else>
        <h1>Projet non trouvé</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { type Projet } from '@/types/types';
import projetsData from '@/assets/json/projets.json'

export default defineComponent({
    name: 'Project',
    setup() {
        const route = useRoute();
        const projectName = route.params.id;
        const projet = ref<Projet | null>(null);
        try {
            projet.value = (projetsData as any).projets.find((projet: Projet) => projet.nom === projectName);
        } catch (error) {
            console.error(error);
        }

        function getImage(img: string) {
            if (projet.value?.type)
                return new URL(`../assets/img/${projet.value.type.includes('BUT') ? "projets-BUT" : "projets"}/${img}`, import.meta.url).href
        }


        return { projet, getImage };
    },
});

</script>