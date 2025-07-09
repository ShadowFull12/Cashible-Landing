"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#team", label: "Team" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="https://i.postimg.cc/GhKqC9zp/cashible-logo.png"
            alt="Cashible Logo"
            width={56}
            height={56}
            className="h-14 w-14"
          />
          <span className="text-xl font-bold font-headline text-white">
            Cashible
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="https://cashible.vercel.app/signup" target="_blank" rel="noopener noreferrer">
              Sign Up
            </Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 grid gap-6 text-lg font-medium">
                <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                    <Image
                        src="https://i.postimg.cc/GhKqC9zp/cashible-logo.png"
                        alt="Cashible Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                        />
                    <span className="text-white">Cashible</span>
                    </Link>
                </SheetClose>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                 <Button asChild className="mt-4">
                  <Link href="https://cashible.vercel.app/signup" target="_blank" rel="noopener noreferrer">
                    Sign Up
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
