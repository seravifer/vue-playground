import { getRestaurants } from "@/services/restaurants/restaurants.service";
import { getDistanceInKm } from "@/utils/distance.util";
import { useQuery } from "@tanstack/vue-query";
import { useGeolocation } from "@vueuse/core";
import { computed } from "vue";

const RESTAURANTS_KEY = "RESTAURANTS";

const DEFAULT_COORDS = {
  latitude: 41.3974432,
  longitude: 2.1855434,
};

export function useGetRestaurants() {
  const { coords } = useGeolocation();

  const { isSuccess, isError, isLoading, data } = useQuery({
    queryKey: [RESTAURANTS_KEY],
    staleTime: 60_000,
    queryFn: getRestaurants,
  });

  const restaurants = computed(() => {
    const userCoords =
      coords.value.accuracy > 0
        ? {
            latitude: coords.value.latitude,
            longitude: coords.value.longitude,
          }
        : DEFAULT_COORDS;

    return data.value
      ?.map((res) => {
        return {
          ...res,
          distance: getDistanceInKm(userCoords, res.coordinates),
        };
      })
      .sort((a, b) => a.distance - b.distance);
  });

  return { isSuccess, isLoading, isError, restaurants };
}
