<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="flex flex-col items-center gap-6 px-6 py-16">
    <img src="/rider.svg" class="h-56" />
    <h1>¡Su pedido esta en camino!</h1>
    <RouterLink to="/" class="text-primary">Volver al inicio</RouterLink>
  </main>
</template>
