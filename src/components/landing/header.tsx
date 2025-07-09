"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
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
            src="https://i.postimg.cc/ZqxtCkPY/PNGLogo.png"
            alt="Cashible Logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <div className="relative">
            <span className="text-xl font-bold font-headline text-gradient bg-gradient-to-br from-cyan-400 to-cyan-600">
              Cashible
            </span>
            <div className="absolute -bottom-1 left-0 h-2 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="h-full w-full animate-squiggly underline-squiggly" />
            </div>
          </div>
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
                        src="https://i.postimg.cc/ZqxtCkPY/PNGLogo.png"
                        alt="Cashible Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                        />
                    <span className="text-gradient bg-gradient-to-br from-cyan-400 to-cyan-600">Cashible</span>
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
