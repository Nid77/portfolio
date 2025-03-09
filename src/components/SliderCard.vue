<template>
    <div class="flex items-center justify-center p-2">
        <button class="" @click="OnPrevious()">
            <Chevron class="flip" />
        </button>

        <div class="slider-container">
            <div class="slider" :style="{ transform: `translateX(-${index * 100}%)` }">
                <RouterLink v-for="(project, i) in props.projects" :key="i"
                    :to="{ name: 'project', params: { id: project.nom } }" class="slide">
                    <div class="self-center">
                        <img class="image" :src="getImage(project.image, project.type)" alt="logo du projet" />
                    </div>
                    <p class="text-black">{{ project.nom }}</p>
                </RouterLink>
            </div>
        </div>

        <button class="" @click="OnNext()">
            <Chevron />
        </button>
    </div>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue'
import { type Project } from '@/types/types'
import Chevron from '@/assets/svg/chevron.svg'

const props = defineProps<{
    projects: Project[]
}>()

const index = ref<number>(0)


const nbProjects = computed(() => {
    return props.projects.length;
});

function getImage(img: string, type: string) {
    return new URL(`../assets/img/${type.includes('BUT') ? "projets-BUT" : "projets"}/${img}`, import.meta.url).href
}

function OnNext() {
    if (index.value < nbProjects.value - 1) {
        index.value++
    }
}

function OnPrevious() {
    if (index.value > 0) {
        index.value--
    }
}


</script>

<style scoped>
svg {
    transform: scale(2);
}

.flip {
    transform: scale(-2);
}

.slider-container {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.image {
    max-height: 18rem;
    object-fit: contain;
}
</style>
