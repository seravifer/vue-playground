import { get } from "../api";
import type { Category } from "./catalog.types";

export const getRestaurantCatalog = (restaurantId: string) => {
  return get<Category[]>(`https://api.last.app/frontend-interview/restaurants/${restaurantId}/catalog`);
};
