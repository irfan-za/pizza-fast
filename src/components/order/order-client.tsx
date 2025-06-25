"use client";
import React, { useEffect, useState } from "react";
import OrderList from "./order-list";
import OrderSummary from "./order-summary";
import OrderLoading from "@/app/order/loading";

export default function OrderClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <OrderLoading />;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <OrderList />
      <OrderSummary />
    </div>
  );
}
