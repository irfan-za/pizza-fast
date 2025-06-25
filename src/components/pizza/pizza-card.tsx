import { useState } from "react";
import Image from "next/image";
import { useOrderStore } from "@/store/order";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import { PizzaItem } from "@/types";
import { calculateDiscountPercentage, formatPrice } from "@/lib/utils";
import PizzaDialog from "./pizza-dialog";

interface PizzaCardProps {
  pizza: PizzaItem;
  onOrderSuccess?: () => void;
}

export const PizzaCard = ({ pizza, onOrderSuccess }: PizzaCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { addToOrder } = useOrderStore();

  const handleAddToCart = () => {
    addToOrder(pizza, quantity);
    toast.success(`Added ${pizza.name} to order!`);
    setQuantity(1);
    if (onOrderSuccess) {
      onOrderSuccess();
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{pizza.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-3 hover:rotate-12 hover:scale-105 duration-300 ease-in">
          <Image
            src={pizza.image}
            alt={pizza.name}
            fill
            className="object-contain"
          />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {pizza.description}
        </p>
      </CardContent>
      <CardFooter className="pt-0 flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          {pizza.originalPrice ? (
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">
                {formatPrice(pizza.price)}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs line-through text-muted-foreground">
                  {formatPrice(pizza.originalPrice)}
                </span>
                <span className="bg-primary/10 text-primary text-xs px-1.5 py-0.5 rounded-full">
                  -
                  {calculateDiscountPercentage(
                    pizza.originalPrice,
                    pizza.price
                  )}
                  %
                </span>
              </div>
            </div>
          ) : (
            <span className="text-lg font-bold text-primary">
              {formatPrice(pizza.price)}
            </span>
          )}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="h-8 w-8"
            >
              <Minus size={14} />
            </Button>
            <span className="w-6 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleIncrement}
              disabled={quantity >= 10}
              className="h-8 w-8"
            >
              <Plus size={14} />
            </Button>
          </div>
        </div>
        <div className="w-full flex gap-2">
          <Button
            variant="secondary"
            className="flex-1 h-9"
            onClick={() => setIsDialogOpen(true)}
          >
            Detail
          </Button>
          <Button className="flex-1 h-9 gap-1" onClick={handleAddToCart}>
            <ShoppingCart size={14} />
            Order
          </Button>
        </div>
      </CardFooter>
      <PizzaDialog
        pizza={pizza}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        handleAddToCart={handleAddToCart}
      />
    </Card>
  );
};
