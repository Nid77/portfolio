<template>
    <div v-if="skills" class="flex flex-col border-2 border-white-500 self-center w-5/6">

        <div class="flex h-1/4 w-full overflow-x-auto">
            <button v-for="comp in skills" :key="comp.nom" :id="comp.nom" class="competence flex-1 text-3x1"
                :style="'background-color :' + comp.bg_color"
                :class="{ 'border-b-4 border-black-500 ': activeTab !== comp.nom, 'border-t-4 border-l-4 border-r-4 border-white-500 ': activeTab === comp.nom }"
                @click="activateTab(comp.nom)">
                <h4>{{ comp.nom }}</h4>
            </button>
        </div>

        <div class="flex flex-1 flex-col h-3/4 p-4 gap-4 text-black border-b-4 border-t-4 border-r-4 border-white-500"
            :style="'background-color :' + skill.bg_second_color">

            <div class="flex gap-4">

                <div class="flex flex-col text-left  md:w-2/3 p-2 gap-4">
                    <div>
                        <h5 class="font-bold mb-2">Competence :</h5>
                        <p class="text-left text-black !important" v-for="item in skill.liste" :key="item">- {{ item }}
                        </p>
                    </div>
                    <ScrollableCard v-if="projects && projects.length > 0" :projects="projects" />
                </div>

                <div class="flex flex-col md:w-1/3 text-black gap-2">
                    <div v-for="(item, index) in skill.niveaux" :key="item.bg_color"
                        class="flex flex-col items-center rounded border-2 border-black p-2 text-center flex-1"
                        :style="'background-color:' + item.bg_color">

                        <h4 class="font-bold text-black flex text-2xl items-center justify-center mb-2">Niveau {{ index
                            + 1
                            }} <div v-if="index.toString() == skill.mon_niveau" class="absolute backandforth ">
                                <ArrowSvg />
                            </div>
                        </h4>
                        <h5 class="m-4">{{ item.description }}</h5>
                    </div>
                </div>

            </div>

        </div>

    </div>
    <div v-else class="text-3xl text-red-500">{{ error }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { type Skill } from '@/types/types'
import { getProjets } from '@/services/skills';
import ArrowSvg from '@/assets/svg/arrow.svg';
import { type Project } from '@/types/types';
import { getProjectByName } from '@/services/projects';
import ScrollableCard from './SliderCard.vue';

const skills = ref<Skill[]>([])
const skill = ref<Skill>({} as Skill);


onMounted(() => {
    skills.value = getProjets();
    skill.value = skills.value[0];
})

const error = ref<string>("Erreur lors du chargement des compétences")
const activeTab = ref('Réalisation d’application');
const activateTab = (tabName: string) => {
    activeTab.value = tabName;
    skill.value = skills.value.find(skill => skill.nom === tabName) as Skill;
};


const projects = computed(() => {
    let projs = skill.value && skill.value.projets
        ? skill.value.projets
            .map((p: string) => getProjectByName(p))
            .filter((project): project is Project => project != null)
        : [];

    return projs;
})


</script>
