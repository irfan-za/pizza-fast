import Link from "next/link";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import OrderClient from "@/components/order/order-client";

export default function OrderPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link
          href="/"
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Menu</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <ShoppingCart className="text-primary" />
        Your Orders
      </h1>

      <OrderClient />
    </main>
  );
}
