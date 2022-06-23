export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  salePrice: number;
  price: number;
  discount: number;
  quantity?: number;
}