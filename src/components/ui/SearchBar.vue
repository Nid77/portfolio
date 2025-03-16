<template>
    <div class="input-container">
        <MagnifyingGlass class="h-12 w-12 p-2" />
        <input type="text" class="w-full h-12" placeholder="Search..." :value="researchValue"
            @input="emit('update:researchValue', ($event.target as HTMLInputElement).value)" />
    </div>
</template>

<script setup lang="ts">

import MagnifyingGlass from '@/assets/svg/magnifying-glass.svg'
defineProps({
    researchValue: String,
});

const emit = defineEmits(['update:researchValue']);


</script>

<style scoped>
input {
    border: none;
    box-shadow: none;
}

input:focus {
    border: none;
    box-shadow: none;
}

.input-container {
    display: flex;
    padding: 0 0.5rem 0 0.5rem;
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: border-color 0.3s, box-shadow 0.3s;
}

.input-container input:focus {
    outline: none;
}

.input-container:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
</style>