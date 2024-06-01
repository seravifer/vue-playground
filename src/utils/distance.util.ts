/**
 * Calculate the distance between two points on the Earth in kilometers using the Haversine formula.
 */
export function getDistanceInKm(
  coords1: { latitude: number; longitude: number },
  coords2: { latitude: number; longitude: number },
): number {
  const { latitude: lat1, longitude: lon1 } = coords1;
  const { latitude: lat2, longitude: lon2 } = coords2;

  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}