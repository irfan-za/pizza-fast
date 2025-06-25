import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { useOrderStore } from "@/store/order";
import { CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function OrderSummary() {
  const router = useRouter();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { orders, getOrderTotal, clearOrder } = useOrderStore();
  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      clearOrder();
      toast.success("Order placed successfully!");
      router.push("/");
      setIsCheckingOut(false);
    }, 1500);
  };

  const total = getOrderTotal();

  return (
    <>
      {orders.length > 0 && (
        <Card className="sticky top-4 h-fit">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {orders.length > 0 ? (
              <div className="space-y-2">
                {orders.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <span>{formatPrice(item.totalPrice)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                You don&apos;t have any pizzas yet
              </p>
            )}
            <div className="border-t border-border pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-primary">{formatPrice(total)}</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button
              className="w-full gap-2"
              size="lg"
              disabled={orders.length === 0 || isCheckingOut}
              onClick={handleCheckout}
            >
              {isCheckingOut ? (
                <>Processing...</>
              ) : (
                <>
                  <CreditCard size={18} />
                  Checkout
                </>
              )}
            </Button>
            {orders.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearOrder}
                className="w-full"
              >
                Clear Order
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </>
  );
}
