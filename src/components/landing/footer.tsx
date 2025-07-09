import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50">
      <div className="container mx-auto grid items-center gap-8 px-4 py-12 text-center md:grid-cols-2 md:px-6 md:text-left">
        <div className="space-y-4">
          <h3 className="font-headline text-2xl font-bold">Ready to take control?</h3>
          <p className="text-muted-foreground">
            Join thousands of Indians on the path to financial wellness. It's free to get started.
          </p>
          <Button size="lg" asChild>
            <Link href="https://cashible.vercel.app/signup" target="_blank" rel="noopener noreferrer">
              Get Started Now
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://i.postimg.cc/ZqxtCkPY/PNGLogo.png"
              alt="Cashible Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold font-headline text-white">
              Cashible
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cashible. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
