<template>
    <section v-if="projets != undefined && projets.length > 0" class="anim-fade-in">
        <h2 class="text-2xl font-extrabold text-white">Personnel</h2>

        <div class="projet-body">
            <a href="#" v-for="p in projets">
                <img :src="getImage(p.type, p.lien)" alt="image du projet" />
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

<style scoped>
.projet-body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>