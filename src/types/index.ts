export type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity?: number;
};

export type CartProps = {
  cart: Product[];
  removeFromCart: (product: Product) => void;
  addToCart: (product: Product) => void;
  removeAllFromCart: (product: Product) => void;
  emptyCart: () => void;
  total: number;
  isEmpty: boolean;
};
