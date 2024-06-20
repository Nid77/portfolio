<template>
    <div class="technos">
        <div v-for=" (techList, category) in technologies"
            class="technos-container border-2 border-white-500 bg-black-500 justify-center p-4 text-white w-3/4">
            <h2 class=" text-5xl text-center font-bold mb-8">{{ category }}</h2>
            <div class="langages flex flex-row flex-wrap ">
                <div v-for="techno in techList" :key="techno.nom"
                    class="bg-[#16161a] flex flex-col text-center items-center bg-black-500 text-2x1 p-4 rounded-lg">
                    <a :href="techno.lien">
                        <img :src="techno.image" class="bg-white h-24 w-24 mb-4" />
                        <h3>{{ techno.nom }}</h3>
                    </a>

                    <!--LES PROJETS 
                            
                            <div class="border-2 border-white-500 bg-black-500 text-2x1 p-4 rounded-lg">
                            <div v-for="projet in techno.projets" :key="projet">
                                <h5 class="text-white">[{{ projet }}]</h5>
                            </div>
                        </div> -->
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
  
<style scoped></style>
  