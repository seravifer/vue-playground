<script setup lang="ts">
import type { Restaurant } from "@/services/restaurants/restaurants.type";

defineProps<{
  restaurant: Restaurant;
}>();
</script>

<template>
  <div class="w-full overflow-hidden">
    <img :src="restaurant.image" :alt="restaurant.name + ' imagen'" class="h-40 w-full object-cover" />
    <div class="relative pl-20 pt-2 pb-3">
      <img
        :src="restaurant.logo"
        :alt="restaurant.name + ' logo'"
        class="absolute -top-5 left-3 rounded-[14px] bg-white shadow-custom-2 h-[55px] w-[55px]"
      />
      <div class="text-base font-medium mb-1 leading-[18 px]">{{ restaurant.name }}</div>
      <div class="text-neutrals-300 leading-4">Comida rápida</div>
      <div class="flex gap-4 text-neutrals-300 text-[9px] mt-[6px]">
        <div class="flex gap-1">
          <img class="h-3" src="/star.icon.svg" />{{ restaurant.ratings.average }} ({{ restaurant.ratings.total }})
        </div>
        <div class="flex gap-1" v-if="restaurant.distance">
          <img class="h-3" src="/location.icon.svg" /> {{ $n(restaurant.distance, "km") }}
        </div>
      </div>
    </div>
  </div>
</template>
