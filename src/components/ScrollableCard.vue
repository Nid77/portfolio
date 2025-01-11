<template>
    <div class="flex h-full justify-between border-4 border-black ">
        <button class="flex items-center justify-center p-2" @click="OnPrevious()">
            <ArrowSvg />
        </button>
        <RouterLink v-if="props.projects[index]" :to="{ name: 'project', params: { id: props.projects[index].nom } }"
            class="flex flex-col justify-center border-2 border-black">
            <div class="max-h-52 self-center">
                <img class="h-full" :src="getImage(props.projects[index].image, props.projects[index].type)"
                alt="logo du projet" />
            </div>
            <p class="text-black" >{{ props.projects[index].nom }}</p>
        </RouterLink>
        <button class="flex items-center justify-center p-2" @click="OnNext()">
            <ArrowSvg class="flip" />
        </button>
    </div>
</template>

<script setup lang="ts">

import { computed, onMounted, ref } from 'vue'
import { type Projet } from '@/types/types'
import ArrowSvg from '@/assets/svg/arrow.svg'

const props = defineProps<{
    projects: Projet[]
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
.flip {
    transform: scaleX(-1);
}
</style>


