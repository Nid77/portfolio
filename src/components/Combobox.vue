<template>
    <div class="relative">
        <input type="text" id="combobox" v-model="resarchValue" @click="isOpen = !isOpen"
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


onMounted(() => {
    const combobox = document.getElementById('combobox');
    combobox?.addEventListener('focusout', (event) => {
        if (!event.relatedTarget || (event.relatedTarget as HTMLElement).id !== 'combobox') {
            isOpen.value = false
        }
    });
})

const isOpen = ref(false)
const resarchValue = ref<string>("")
const selectedOption = ref<String>("")

function selectOption(option: string) {
    selectedOption.value = option
    isOpen.value = false
    emit('updateOptions', selectedOption.value)
}

const filterOptions = computed(() => {
    if (resarchValue.value === "") return props.options
    return props.options.filter((option) => {
        return option.toLocaleLowerCase().includes(resarchValue.value.toLocaleLowerCase())
    })
})




</script>