<script setup lang="ts">
import RestaurantCard from "@/components/RestaurantCard.vue";
import { useGetRestaurants } from "@/hooks/useGetRestaurants";

const { isSuccess, isLoading, isError, restaurants } = useGetRestaurants();
</script>

<template>
  <main class="p-8">
    <h2 class="mb-6">Restaurantes</h2>

    <div v-if="isLoading" class="">Cargando...</div>

    <div v-if="isError" class="text-red-500">Estamos teniendo problemas para obtener los restaurantes.</div>

    <div v-if="isSuccess" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RouterLink v-for="restaurant in restaurants" :key="restaurant.id" :to="'/restaurant/' + restaurant.id">
        <RestaurantCard :restaurant="restaurant" class="rounded-[14px] shadow-custom" />
      </RouterLink>
    </div>
  </main>
</template>
