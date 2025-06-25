"use client";

import { ShoppingCart, Pizza } from "lucide-react";
import Link from "next/link";
import { useOrderStore } from "@/store/order";

export const Navbar = () => {
  const { orders } = useOrderStore();
  const ordersCount = orders.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-card p-4 shadow-lg rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-primary">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-primary/90 transition-colors"
          >
            <Pizza size={24} />
            <span>PizzaFast</span>
          </Link>
        </div>
        <Link
          href="/order"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors relative"
        >
          <ShoppingCart size={18} />
          <span>Order</span>
          {ordersCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
              {ordersCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};
