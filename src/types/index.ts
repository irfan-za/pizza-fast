export interface PizzaItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  image: string;
  quantity?: number;
  maxQuantity: number;
}

export interface OrderItem {
  id: string;
  pizzaId: string;
  name: string;
  price: number;
  quantity: number;
  maxQuantity: number;
  totalPrice: number;
  date: string;
}
