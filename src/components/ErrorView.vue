<template>
    <div class="flex flex-col items-center gap-2">
        <h1>404 - Page Not Found</h1>
        <p>La page que vous recherchez n'existe pas.</p>
        <RouterLink to="/">Retour à l'accueil</RouterLink>
    </div>
</template>
  
<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped>
h1 {
    font-size: 3em;
    margin: 0;
    color: #ffffff;
}

p {
    font-size: 1.5em;
}

div {
    text-align: center;
    margin-top: 20vh;
}
</style>