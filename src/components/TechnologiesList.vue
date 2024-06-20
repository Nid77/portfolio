<template>
    <div class="technos self-center">
        <div v-for=" competence in technologies">
            <div
                class="border-2 border-white-500 bg-[#7f5af0] text-2x1 p-4 rounded-lg flex flex-col items-center justify-center text-center w-3/4 gap-20 p-12">
                <h2 class="text-5xl text-white text-center font-bold">test{{ }}</h2>
                <div class="langages grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 self-center">
                    <div v-for="techno in competence" :key="techno.nom"
                        class="text-3x1 h-90 text-white bg-[#16161a] gap-4 flex flex-col text-center items-center border-2 border-white-500 bg-black-500 text-2x1 p-4 rounded-lg">
                        <a :href="techno.lien">
                            <img :src="techno.image" class="bg-white h-48" />
                            <h4>{{ techno.nom }}</h4>
                        </a>

                        <div class="border-2 border-white-500 bg-black-500 text-2x1 p-4 rounded-lg">
                            <div v-for="projet in techno.projets" :key="projet">
                                <h5 class="text-white">[{{ projet }}]</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

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
    created() {
        console.log(this.technologies);
        console.log("allo");
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
    padding: 12px;
    border-radius: 8px;
}
</style>
  