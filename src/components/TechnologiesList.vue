<template>
    <div class="tabs flex flex-col text-white w-1/2">
        <ul class="flex flex-row justify-around gap-4 pt-8">
            <li v-for=" (techList, category) in technologies"><button @click="activateTab(category)">{{ category }}</button>
            </li>
        </ul>
        <hr class="h-1 w-full mt-8" />
        <div>
            <div v-for=" (techList, category) in technologies"
                :class="{ 'langages flex flex-row flex-wrap gap-4': activeTab === category, 'hidden': activeTab !== category }">
                <div v-for="techno in techList" :key="techno.nom"
                    class="bg-[#16161a] flex flex-col text-center items-center bg-black-500 text-2x1 p-4 rounded-lg">
                    <a :href="techno.lien">
                        <img :src="techno.image" class="bg-white h-24 w-24 mb-4" />
                        <h3>{{ techno.nom }}</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Technology {
    nom: string;
    lien: string;
    image: string;
    tags: string[];
    projets: string[];
}

export default defineComponent({
    name: 'TechnologiesList',
    props: {
        technologies: {
            type: Object as () => Record<string, Technology[]>,
            required: true
        },
    },
    setup() {
        const activeTab = ref('Langages');
        const activateTab = (tabName: string) => {
            activeTab.value = tabName;
        };
        return { activeTab, activateTab };
    },
});
</script>
  
<style scoped></style>
  