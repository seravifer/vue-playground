<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";

defineProps<{
  show: boolean;
  onClose?: () => void;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <main class="fixed top-0 bottom-0 bg-white w-screen h-screen p-8" :class="{ hidden: !show }">
    <div class="flex items-center gap-4">
      <img src="/back.svg" alt="Atrás" class="h-6" @click="emit('close')" />
      <div class="relative w-full">
        <div class="absolute top-3 left-3">
          <IconSearch fill="#2C2C45" width="24px" height="24px" />
        </div>
        <input
          type="text"
          class="w-full h-12 py-4 pl-12 leading-4 rounded-xl bg-neutrals-10 outline-none"
          placeholder="Buscar productos"
        />
      </div>
    </div>
  </main>
</template>
