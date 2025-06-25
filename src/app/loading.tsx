import PizzaGridSkeleton from "@/components/pizza/pizza-grid-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Fallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4 rounded-2xl mb-8 p-6 md:p-10">
        <Skeleton className="h-64 w-full" />
      </div>
      <PizzaGridSkeleton />
    </div>
  );
}
