<template>
    <div class=" bg-[#16161a] rounded p-20">
        <h1 class="text-6xl text-white text-center font-bold ">Mes Compétences</h1>

        <h2 class="text-2x1 text-center text-white p-8 ">Les competences que jai acquis durant mes années d'etude en BUT
            INFORMATIQUE
        </h2>
    </div>

    <div class="competences">
        <div v-if="competences" v-for="competence in competences" :key="competence.nom_competence"
            :id="competence.nom_competence" class="competence text-3x1 ">
            <div>
                <h4>{{ competence.nom_competence }}</h4>
                <button class="font-bold defilement" type="button" :value="competence.nom_competence"
                    @click="toggleDetail(competence.nom_competence)">{{ activeCompetence === competence.nom_competence ? "-"
                        : "+" }}</button>
            </div>
            <hr :class="{ bar: activeCompetence === competence.nom_competence }" id="bar" />
            <div id="detail" :class="['', { visible: activeCompetence === competence.nom_competence }]">
                <h5 v-for="item in competence.liste" :key="item">- {{ item }}</h5>

                <hr :class="{ bar: competence.projets && competence.projets.length > 0 }" id="bar" />
                <h4 v-if="competence.projets && competence.projets.length > 0"
                    class="self-center font-bold defilement text-4x1">Projets</h4>

                <div v-if="competence.projets && competence.projets.length > 0" class="projets">
                    <div v-for="projet in competence.projets " class="projet">
                        <img :src="getImage(projet.img)" alt="image du projet">
                        <p class="">{{ projet.nom_projet }}</p>
                        <p>{{ projet.description }}</p>
                    </div>
                </div>
            </div>

        </div>
        <div v-else-if="error" class="text-3x1 text-color-red">{{ error }}</div>
    </div>

    <!-- <div class="competences">
        <div class="header">
            <div v-if="competences" v-for="competence in competences" :key="competence.nom_competence"
                :id="competence.nom_competence" class="competence text-3x1 ">

                <h4>{{ competence.nom_competence }}</h4>

            </div>
            <div v-else-if="error" class="text-3x1 text-color-red">{{ error }}</div>
        </div>
    </div> -->
    <div class="technos">
        <TechnologiesList :technologies="technos" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import competenceData from '@/assets/json/competence.json';
import technologiesData from '@/assets/json/technologies.json';
import TechnologiesList from '@/components/TechnologiesList.vue';
import '@/assets/style/competence.css';

interface Competence {
    nom_competence: string;
    liste: string[];
    projets: Projet[];
}

interface Projet {
    nom_projet: string;
    img: string;
    description: string;
}

interface Technology {
    nom: string;
    lien: string;
    image: string;
    tags: string[];
    projets: string[];
}


export default defineComponent({
    name: 'CompetenceList',
    components: {
        TechnologiesList,
    },
    setup() {
        const competences = ref<Competence[]>([]);
        const error = ref<string | null>(null);
        const activeCompetence = ref<string | null>(null);

        onMounted(() => {
            try {
                competences.value = (competenceData as any).competences;
            } catch (err) {
                error.value = 'Erreur lors du chargement du fichier JSON';
            }
        });

        const toggleDetail = (competenceName: string) => {
            if (activeCompetence.value === competenceName) {
                activeCompetence.value = null;
            } else {
                activeCompetence.value = competenceName;
            }
        };

        function getImage(img: string) {
            return `/src/assets/img/projet-BUT/${img}`;
        }

        return {
            competences,
            error,
            activeCompetence,
            toggleDetail,
            technos: technologiesData as Record<string, Technology[]>,
            getImage
        };
    },
});
</script>

<style scoped>
.technos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
</style>