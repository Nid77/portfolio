<template>
    <section v-if="projets != undefined && projets.length > 0" class="flex anim-fade-in">
        <h2>{{ title }}</h2>
        <div class="flex flex-row w-full items-center justify-center">
            <RouterLink v-for="p in projets" :key="p.nom" :to="{ name: 'project', params: { id: p.nom } }">
                <img :src="getImage(p.type, p.image)" alt="image du projet" />
                <h3>{{ p.nom }}</h3>
            </RouterLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { type Project } from '@/types/types';
import { getProjectByName } from '@/services/projects';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    title: string,
    projets: string[]
}>()

const projets: Project[] = props.projets.map((p: string) => getProjectByName(p) as Project).filter((project) => project !== undefined);

function getImage(type: string, img: string) {
    return new URL(`../assets/img/${type && type.includes('BUT') ? "projets-BUT" : "projets"}/${img}`, import.meta.url).href
}

</script>
