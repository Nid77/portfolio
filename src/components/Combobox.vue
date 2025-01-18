<template>
    <div class="relative" id="combobox">
        <input type="text" v-model="resarchValue" @click="isOpen = !isOpen" 
            class="w-full h-12 px-4 pr-12 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Filter..." />
        <div v-if="isOpen" class="absolute top-14 w-full bg-white border border-gray-300 rounded-md shadow-md">
            <div v-for="(option, index) in filterOptions" :key="index" @click="selectOption(option as string)"
                class="p-2 cursor-pointer hover:bg-gray-100">
                {{ option }}
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { ref } from 'vue';

const props = defineProps({
    options: {
        type: Array<String>,
        required: true
    }
})

const emit = defineEmits(['updateOptions'])

const isOpen = ref(false)
const resarchValue = ref<string>("")

function selectOption(option: string) {
    isOpen.value = false
    emit('updateOptions',option)
}

const filterOptions = computed(() => {
    if (resarchValue.value === "") return props.options
    return props.options.filter((option) => {
        return option.toLocaleLowerCase().includes(resarchValue.value.toLocaleLowerCase())
    })
})

onMounted(() => {
    window.addEventListener('click', (e) => {
        if (!(e.target as HTMLElement).closest('#combobox')) {
            isOpen.value = false
        }
    })
})

</script>