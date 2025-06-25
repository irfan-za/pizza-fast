import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { calculateDiscountPercentage, formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { PizzaItem } from "@/types";

interface PizzaDialogProps {
  pizza: PizzaItem;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  handleAddToCart: () => void;
}
export default function PizzaDialog({
  pizza,
  isDialogOpen,
  setIsDialogOpen,
  handleAddToCart,
}: PizzaDialogProps) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-[90%] overflow-x-hidden mx-auto">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-xl font-bold">{pizza.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            {pizza.description}
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={pizza.image}
            alt={pizza.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex justify-between items-end md:items-center">
          <div>
            {pizza.originalPrice ? (
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="text-lg font-bold text-primary">
                  {formatPrice(pizza.price)}
                </span>
                <div>
                  <span className="text-sm line-through text-muted-foreground">
                    {formatPrice(pizza.originalPrice)}
                  </span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
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
          </div>
          <Button onClick={handleAddToCart} className="gap-2">
            <ShoppingCart size={16} />
            Add to Order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
