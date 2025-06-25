import { Suspense } from "react";
import { HeroSection } from "@/components/hero-section";
import { PizzaGrid } from "@/components/pizza/pizza-grid";
import Fallback from "./loading";

export default async function Home() {
  return (
    <main className="container mx-auto px-4">
      <Suspense fallback={<Fallback />}>
        <HeroSection />
        <PizzaGrid />
      </Suspense>
    </main>
  );
}
