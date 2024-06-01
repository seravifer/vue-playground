export interface Category {
  name: string;
  products: Product[];
}

export interface Product {
  name: string;
  image: string;
  price: number;
}
