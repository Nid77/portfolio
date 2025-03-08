<template>
    <a :href="props.link" target="_blank">
        <button class="btn-play">
            <span class="btn-label">PLAY</span>
            <span class="btn-arrow">→</span>
        </button>
    </a>
</template>

<script setup lang="ts">

const props = defineProps<{
    link: string
}>()


</script>

<style scoped lang="scss">
.btn-play {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #000;
    color: white;
    border-radius: 1.5rem;
    cursor: pointer;
    overflow: hidden;
    transition: background-color 0.4s ease;

    .btn-label {
        position: relative;
        z-index: 1;
    }

    .btn-arrow {
        position: relative;
        z-index: 1;
        margin-left: 10px;
        opacity: 0;
        transition: opacity 0.4s ease, transform 0.4s ease;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: #3498db;
        transition: left 0.4s ease;
    }

    &:hover {
        &::before {
            left: 0;
        }

        .btn-arrow {
            opacity: 1;
            transform: translateX(5px);
        }
    }
}
</style>