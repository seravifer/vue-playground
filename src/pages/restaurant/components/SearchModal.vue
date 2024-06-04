<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { Product } from "@/services/catalog/catalog.types";

defineProps<{
  show: boolean;
  items: Product[];
  onClose?: () => void;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "itemSelected", product: Product): void;
}>();
</script>

<template>
  <main class="fixed top-0 bottom-0 bg-white w-screen h-screen p-8" :class="{ hidden: !show }">
    <div class="flex items-center gap-4 mb-6">
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
    <div class="flex items-center gap-4 py-4" v-for="product of items" :key="product.name">
      <div class="grow flex items-center max-w-16 h-11">
        <img :src="product.image" :alt="product.name + ' imagen'" class="object-cover rounded-[9px] bg-white" />
      </div>
      <div class="flex flex-col">
        <span class="text-sm">
          {{ product.name }}
        </span>
        <span class="font-semibold">{{ $n(product.price, "currency") }}</span>
      </div>
      <img class="h-5 ml-auto" src="/plus.svg" @click="$emit('itemSelected', product)" />
    </div>
  </main>
</template>
