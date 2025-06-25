"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PizzaCard } from "@/components/pizza/pizza-card";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import initialPizzas from "@/data/pizzas.json";
import PizzaGridSkeleton from "./pizza-grid-skeleton";

export const PizzaGrid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const newPizzas = initialPizzas.filter((pizza) => {
      return pizza.name.toLowerCase().includes(searchQuery);
    });
    setTimeout(() => {
      setPizzas(newPizzas);
      setIsLoading(false);
    }, 500);
  }, [searchParams]);

  const handleOrderSuccess = () => {
    toast.success("Successfully ordered pizza!");
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our Menu</h2>
      </div>

      {isLoading ? (
        <PizzaGridSkeleton />
      ) : pizzas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onOrderSuccess={handleOrderSuccess}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            No pizzas found matching &quot;{searchQuery}&quot;
          </p>
          <Button onClick={() => router.replace("/")}>View All Pizzas</Button>
        </div>
      )}
    </section>
  );
};
