<template>
    <section v-if="projets != undefined && projets.length > 0" class="anim-fade-in">
        <div class="flex flex-row w-full items-center justify-center">
            <a href="#" v-for="p in projets">
                <img :src="getImage(p.type, p.image)" alt="image du projet" />
                <h3>{{ p.nom }}</h3>
            </a>
        </div>
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { type Projet } from '@/types/types';
import { getProjectByName } from '@/services/projects';
export default defineComponent({
    name: 'ProjectPresentation',
    props: {
        projets: { type: Array as () => string[], required: true }
    },
    setup(props) {

        const projets: Projet[] = props.projets.map((p: string) => getProjectByName(p) as Projet).filter((project) => project !== undefined);
        function getImage(type: string, img: string) {
            return new URL(`../assets/img/${type && type.includes('BUT') ? "projets-BUT" : "projets"}/${img}`, import.meta.url).href
        }

        return { projets, getImage }
    }

})

</script>

<style scoped></style>