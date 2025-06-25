import Link from "next/link";
import { Pizza, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 flex items-center flex-col gap-3">
        <Pizza className="text-primary w-24 h-24" />
        <span>404 - Not Found</span>
      </h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        Oops! Looks like this pizza has been eaten or doesn&apos;t exist.
        Let&apos;s get you back to our delicious menu!
      </p>
      <Button asChild size="lg">
        <Link href="/" className="flex items-center gap-2">
          <Home size={18} />
          Back to Home
        </Link>
      </Button>
    </main>
  );
}
