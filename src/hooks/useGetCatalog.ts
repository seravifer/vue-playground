import { getRestaurantCatalog } from "@/services/catalog/catalog.service";
import { useQuery } from "@tanstack/vue-query";

const CATALOG_KEY = "CATALOG";

export function useGetCatalog(restaurantId: string) {
  return useQuery({
    queryKey: [CATALOG_KEY, restaurantId],
    staleTime: 1_000 * 60 * 5, // 5 minutes
    queryFn: () => getRestaurantCatalog(restaurantId),
  });
}
