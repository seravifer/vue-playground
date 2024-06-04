<script setup lang="ts">
import { ref, computed } from "vue";
import RestaurantCard from "@/components/RestaurantCard.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import SearchModal from "./components/SearchModal.vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useGetRestaurants } from "@/hooks/useGetRestaurants";
import { useGetCatalog } from "@/hooks/useGetCatalog";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { Product } from "@/services/catalog/catalog.types";

const route = useRoute();
const router = useRouter();

const restaurantId = route.params.id as string;

const { restaurants } = useGetRestaurants();
const { data: catalog } = useGetCatalog(restaurantId);

const restaurant = computed(() => restaurants.value?.find((restaurant) => restaurant.id === restaurantId));

const filteredCategory = ref<number>(0);
const showSearchModal = ref<boolean>(false);

const { total, shoppingCart, addToCart, removeFromCart, resetCart } = useShoppingCart(restaurantId);

const allProducts = computed<Product[]>(() => (catalog.value ?? []).flatMap((category) => category.products));

function onItemSelected(product: Product) {
  addToCart(product);
}

function onPayment() {
  router.push("/payment").then(() => {
    resetCart();
  });
}
</script>

<template>
  <main>
    <div class="relative">
      <div class="flex justify-between absolute top-5 w-full px-7">
        <RouterLink to="/" class="h-8 w-8 flex items-center justify-center bg-primary/85 rounded-full">
          <IconChevron fill="white" />
        </RouterLink>
        <div
          class="h-8 w-8 flex items-center justify-center bg-primary/85 rounded-full"
          @click="showSearchModal = true"
        >
          <IconSearch fill="white" />
        </div>
      </div>
      <RestaurantCard v-if="restaurant" :restaurant="restaurant" />
    </div>

    <div class="flex gap-2 pl-6 overflow-auto my-5" v-if="catalog">
      <div
        v-for="(category, index) of catalog"
        @click="filteredCategory = index"
        :key="category.name"
        class="text-sm px-3 py-[10px] rounded-full"
        :class="{ 'bg-primary text-white': filteredCategory === index }"
      >
        {{ category.name }}
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 px-7 pb-28" v-if="catalog && catalog.length > 0">
      <div
        class="flex flex-col"
        v-for="product of catalog[filteredCategory].products"
        :key="product.name"
        :id="product.name"
      >
        <div class="grow flex items-center">
          <img :src="product.image" :alt="product.name + ' imagen'" class="object-cover rounded-[9px] bg-white" />
        </div>
        <div class="text-sm">{{ product.name }}</div>
        <div class="flex justify-between items-center text-sm">
          <span class="font-semibold">{{ $n(product.price, "currency") }}</span>
          <div class="flex items-center">
            <template v-if="shoppingCart[product.name]">
              <img class="h-5" src="/minus.svg" @click="removeFromCart(product.name)" />
              <div class="text-center w-7">{{ shoppingCart[product.name].quantity }}</div>
            </template>
            <img class="h-5" src="/plus.svg" @click="addToCart(product)" />
          </div>
        </div>
      </div>
    </div>
  </main>

  <SearchModal
    :show="showSearchModal"
    :items="allProducts"
    @itemSelected="(p) => onItemSelected(p)"
    @close="showSearchModal = false"
  />

  <button
    class="h-14 rounded-lg bg-primary text-white font-medium text-lg fixed bottom-7 left-5 right-5"
    @click="onPayment()"
  >
    TOTAL ({{ $n(total, "currency") }})
  </button>
</template>
