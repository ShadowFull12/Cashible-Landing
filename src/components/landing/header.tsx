"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://i.postimg.cc/ZqxtCkPY/PNGLogo.png"
            alt="Cashible Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold font-headline text-white">
            Cashible
          </span>
        </Link>
        <nav>
          <Button asChild>
            <Link href="https://cashible.vercel.app/signup" target="_blank" rel="noopener noreferrer">
              Sign Up
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
