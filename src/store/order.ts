import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OrderItem, PizzaItem } from "@/types";

interface OrderState {
  orders: OrderItem[];
  addToOrder: (pizza: PizzaItem, quantity: number) => void;
  removeFromOrder: (id: string) => void;
  updateOrderItemQuantity: (id: string, quantity: number) => void;
  clearOrder: () => void;
  getOrderTotal: () => number;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],

      addToOrder: (pizza: PizzaItem, quantity: number) => {
        const { orders } = get();
        const existingItem = orders.find((item) => item.pizzaId === pizza.id);

        if (existingItem) {
          set({
            orders: orders.map((item) =>
              item.pizzaId === pizza.id
                ? {
                    ...item,
                    quantity: item.quantity + quantity,
                    totalPrice: (item.quantity + quantity) * item.price,
                  }
                : item
            ),
          });
        } else {
          set({
            orders: [
              ...orders,
              {
                id: crypto.randomUUID(),
                pizzaId: pizza.id,
                name: pizza.name,
                price: pizza.price,
                quantity,
                maxQuantity: pizza.maxQuantity,
                totalPrice: quantity * pizza.price,
                date: new Date().toISOString(),
              },
            ],
          });
        }
      },

      removeFromOrder: (id: string) => {
        const { orders } = get();
        set({ orders: orders.filter((item) => item.id !== id) });
      },

      updateOrderItemQuantity: (id: string, quantity: number) => {
        const { orders } = get();
        set({
          orders: orders.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity,
                  totalPrice: quantity * item.price,
                }
              : item
          ),
        });
      },

      clearOrder: () => set({ orders: [] }),

      getOrderTotal: () => {
        const { orders } = get();
        return orders.reduce((total, item) => total + item.totalPrice, 0);
      },
    }),
    {
      name: "pizza-fast-orders",
      storage: {
        getItem: (name) => {
          return JSON.parse(sessionStorage.getItem(name) || "null");
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    }
  )
);
