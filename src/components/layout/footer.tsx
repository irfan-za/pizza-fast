import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-12 lg:mt-16">
      <div className="container py-4 text-center text-muted-foreground mx-auto">
        <p>
          &copy; {new Date().getFullYear()} PizzaFast. All rights reserved.
          Developed by{" "}
          <Link
            href={"https://portfolio-irfan-za.vercel.app"}
            className="underline"
            target="_blank"
          >
            irfan.
          </Link>
        </p>
      </div>
    </footer>
  );
}
