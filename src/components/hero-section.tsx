"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  params.set("search", searchQuery);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = e.currentTarget.elements.namedItem(
      "search"
    ) as HTMLInputElement;
    setSearchQuery(search.value);

    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  };
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-6 p-6 md:p-10 relative z-10 md:min-h-[calc(100vh-4rem)] 2xl:min-h-fit">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Delicious Pizzas{" "}
            <span className="text-primary">Delivered Fast</span>
          </h1>
          <p className="text-muted-foreground mb-6 max-w-md">
            Enjoy our handcrafted pizzas made with fresh ingredients, delivered
            right to your door in no time.
          </p>
          <form onSubmit={handleSearch} className="flex w-full max-w-sm">
            <Input
              type="text"
              placeholder="Search for pizzas..."
              value={searchQuery}
              name="search"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-r-none focus-visible:ring-1 focus-visible:ring-primary"
            />
            <Button type="submit" className="rounded-l-none">
              <Search size={18} className="mr-2" />
              Search
            </Button>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="relative w-40 md:w-72
           aspect-square hover:rotate-12 hover:scale-105 duration-300 ease-in"
          >
            <Image
              src="/images/hero.png"
              alt="Delicious Pizza"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
