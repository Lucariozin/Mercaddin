export type ProductType = {
  stripePriceId: string;
  slug: string;
  name: string;
  description: string;
  price: string;
  discount: number;
  oldPrice: string;
  imgArray: string[];
};

export interface ProductOfCart extends ProductType {
  amountProducts: number;
  isSelected: boolean;
}; 
