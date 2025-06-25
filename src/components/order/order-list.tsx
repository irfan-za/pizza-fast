import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { useOrderStore } from "@/store/order";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
export default function OrderList() {
  const { orders, updateOrderItemQuantity, removeFromOrder } = useOrderStore();
  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > 10) return;
    updateOrderItemQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    removeFromOrder(id);
    toast.success("Item removed");
  };

  return (
    <div className="lg:col-span-2">
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(item.price)} per item
                    </p>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-r-none"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </Button>
                        <div className="h-8 px-3 flex items-center justify-center border-y border-input">
                          {item.quantity}
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-l-none"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          disabled={item.quantity >= item.maxQuantity}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                    <div className=" font-medium">
                      {formatPrice(item.totalPrice)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ShoppingCart size={64} className="text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your orders is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some delicious pizzas to your orders
            </p>
            <Button asChild>
              <Link href="/">Browse Menu</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
