<template>
    <div class="relative" id="combobox">
        <input type="text" v-model="resarchValue" @click="isOpen = !isOpen" class="combobox-input"
            placeholder="Filter..." />
        <div v-if="isOpen" class="options-container">
            <div v-for="(option, index) in filterOptions" :key="index" @click="selectOption(option as string)"
                class="option">
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
    emit('updateOptions', option)
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

<style scoped>
.combobox-input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem 0 1.5rem;
    color: #4b5563;
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: border-color 0.3s, box-shadow 0.3s;
}

.combobox-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.options-container {
    position: absolute;
    top: 3.5rem;
    width: 100%;
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 40;
}

.option {
    padding: 0.5rem;
    cursor: pointer;
}

.option:hover {
    background-color: #f3f4f6;
}
</style>