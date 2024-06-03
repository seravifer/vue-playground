import type { Product } from "@/services/catalog/catalog.types";
import { reactive, computed } from "vue";

const store = reactive<{
  [shopId: string]: {
    [productId: string]: {
      quantity: number;
      price: number;
    };
  };
}>({});

export function useShoppingCart(shopId: string) {
  const shoppingCart = computed(() => {
    return store[shopId] ?? {};
  });

  const total = computed(() => {
    return Object.values(shoppingCart.value).reduce((acc, { price, quantity }) => {
      return acc + price * quantity;
    }, 0);
  });

  function addToCart(product: Product) {
    if (!store[shopId]) {
      store[shopId] = {};
    }

    if (!store[shopId][product.name]) {
      store[shopId][product.name] = {
        quantity: 0,
        price: product.price,
      };
    }

    store[shopId][product.name].quantity++;
  }

  function removeFromCart(productName: string) {
    if (!store[shopId] || !store[shopId][productName]) {
      return;
    }

    store[shopId][productName].quantity--;

    if (store[shopId][productName].quantity === 0) {
      delete store[shopId][productName];
    }
  }

  function resetCart() {
    store[shopId] = {};
  }

  return { total, shoppingCart, addToCart, removeFromCart, resetCart };
}
