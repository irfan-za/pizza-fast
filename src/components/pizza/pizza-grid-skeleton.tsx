import React from "react";

export default function PizzaGridSkeleton() {
  const skeletonItems = Array(8).fill(0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletonItems.map((_, index) => (
        <div key={index} className="rounded-lg border border-border p-4 h-80">
          <div className="h-40 bg-muted rounded-md animate-pulse mb-4" />
          <div className="h-4 bg-muted rounded-md animate-pulse mb-2 w-3/4" />
          <div className="h-4 bg-muted rounded-md animate-pulse mb-4 w-1/2" />
          <div className="h-8 bg-muted rounded-md animate-pulse" />
        </div>
      ))}
    </div>
  );
}
