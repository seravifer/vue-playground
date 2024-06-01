<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header class="h-16 px-8 bg-primary flex items-center">
    <img alt="Last.app logo" src="/logo.png" class="h-6" />
  </header>
  <RouterView />
</template>
