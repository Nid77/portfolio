<template>
    <div class="tabs flex flex-col text-white w-3/4 mt-4">
        <ul class="flex flex-row justify-around gap-4 overflow-x-auto">
            <li v-for=" (techList, category) in technologies"
                :class="['p-4', { 'border-b-4 border-blue-500': activeTab === category }]"><button
                    @click="activateTab(category)">{{
                        category }}</button>
            </li>
        </ul>
        <hr class="h-2 w-full mb-2" />
        <div>
            <div class="langages grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                <div v-for="index in itemsPerPage" :key="index"
                    class="bg-[#242629] flex flex-col text-center items-center justify-center text-2x1 p-4 rounded-lg h-40">
                    <a v-if="paginatedTechnologies[index - 1]" :href="paginatedTechnologies[index - 1].lien"
                        class="flex flex-col items-center">
                        <img :src="paginatedTechnologies[index - 1].image" class="h-24 w-24 mb-4 self-center" />
                        <p>{{ paginatedTechnologies[index - 1].nom }}</p>
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
  
<script setup lang="ts">
import { ref, computed } from 'vue';
import { getTechnologies } from '@/services/technologies';


const technologies = getTechnologies();
const activeTab = ref<string>('Langages');
const activateTab = (tabName: string) => {
    activeTab.value = tabName;
    currentPage.value = 1;
};
const itemsPerPage = 12;
const currentPage = ref(1);


const totalPages = computed(() => {
    return Math.ceil(technologies[activeTab.value].length / itemsPerPage);
});

const paginatedTechnologies = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return technologies[activeTab.value].slice(start, end);
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


</script>
  
<style scoped></style>
  