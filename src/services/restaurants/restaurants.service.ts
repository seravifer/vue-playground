import { get } from "../api";
import type { Restaurant } from "./restaurants.type";

export const getRestaurants = () => {
  return get<Restaurant[]>("https://api.last.app/frontend-interview/restaurants");
};
