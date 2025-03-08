<template>
    <div v-if="props.isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
        <div
            class=" flex flex-col items-center justify-center bg-[#5b5e65] rounded-lg overflow-hidden shadow-xl transform transition-all w-3/4">
            <h3 class="text-3xl font-bold text-white p-2">
                {{ props.title }}
            </h3>
            <hr class="border-t border-2 border-gray-300 w-3/4">
            <div class="p-4 m-2" style="max-height: 70vh; overflow-y: auto;">
                <slot></slot>
            </div>
            <hr class="border-t border-2 border-gray-300 w-3/4">
            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button @click="closeModal"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        default: 'Modal Title'
    }
});

const emit = defineEmits<{
    (e: 'close'): void;
}>();

const closeModal = () => {
    emit('close');
};
</script>

  
  