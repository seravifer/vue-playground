export interface Restaurant {
  id: string;
  name: string;
  image: string;
  logo: string;
  ratings: Ratings;
  coordinates: Coordinates;
  distance?: number;
}

export interface Ratings {
  total: string;
  average: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
