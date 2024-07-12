<template>
    <div class="tabs flex flex-col text-white w-1/2 mt-4">
        <ul class="flex flex-row justify-around gap-4">
            <li v-for=" (techList, category) in technologies"
                :class="['p-4', { 'border-b-4 border-blue-500': activeTab === category }]"><button
                    @click="activateTab(category)">{{
                        category }}</button>
            </li>
        </ul>
        <hr class="h-2 w-full mb-2" />
        <div>
            <div class="langages grid grid-cols-4 gap-4">
                <div v-for="techno in paginatedTechnologies" :key="techno.nom"
                    class="bg-[#16161a] flex flex-col text-center items-center justify-center bg-black-500 text-2x1 p-4 rounded-lg">
                    <a :href="techno.lien">
                        <img :src="techno.image" class="bg-white h-24 w-24 mb-4" />
                        <h3>{{ techno.nom }}</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-between mt-4 items-center gap-4">
        <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-gray-300 rounded">Previous</button>
        <span class="text-white">Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-gray-300 rounded">Next</button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

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
    setup(props) {
        const activeTab = ref('Langages');
        const activateTab = (tabName: string) => {
            activeTab.value = tabName;
            currentPage.value = 1;
        };
        let start: number = 0;
        let end: number = 4;

        const itemsPerPage = 8;
        const currentPage = ref(1);


        const totalPages = computed(() => {
            return Math.ceil(props.technologies[activeTab.value].length / itemsPerPage);
        });

        const paginatedTechnologies = computed(() => {
            const start = (currentPage.value - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            return props.technologies[activeTab.value].slice(start, end);
        });

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
            }
        };

        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
            }
        };
        return { activeTab, activateTab, paginatedTechnologies, nextPage, prevPage, currentPage, totalPages };
    },
});
</script>
  
<style scoped></style>
  