<template>

    <button class="btn" @click="redirect">
        <span class="btn-label">{{ props.title ?? "Explorer le projet" }}</span>
        <span class="btn-arrow">→</span>
    </button>

</template>

<script setup lang="ts">

const props = defineProps<{
    link: string
    title?: string
}>()

const redirect = () => {
  window.open(props.link, "_blank");
};
</script>

<style scoped lang="scss">
.btn {
    position: relative;
    align-items: center;
    background-color: #000;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    overflow: hidden;
    transition: background-color 0.4s ease;

    .btn-label {
        position: relative;
        text-align: center;
        z-index: 1;
    }

    .btn-arrow {
        position: relative;
        margin-left: 10px;
        z-index: 1;
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
        }
    }
}
</style>