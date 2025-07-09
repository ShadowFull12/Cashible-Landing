import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 py-20 text-center md:py-32 lg:py-40">
      <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-in-out">
        <div className="group relative mx-auto mb-4 w-fit">
          <h2 className="font-headline text-5xl font-bold tracking-tighter text-gradient bg-gradient-to-br from-cyan-400 to-cyan-600 md:text-7xl lg:text-8xl">
            Cashible
          </h2>
          <div className="absolute -bottom-2 left-0 h-3 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="h-full w-full animate-squiggly underline-squiggly" />
          </div>
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-br from-white to-slate-400">
          Master Your Money, Master Your Life
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Welcome to Cashible, the modern finance tracker built for India. 
          Effortlessly manage your expenses, budgets, and investments to achieve financial freedom.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="https://cashible.vercel.app/signup" target="_blank" rel="noopener noreferrer">Get Started</Link>
          </Button>
        </div>
        <div className="relative mt-12 md:mt-16 animate-float">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <Image 
            src="https://i.postimg.cc/ZqrWKXkH/image-2025-07-09-193839917.png"
            alt="Cashible App Dashboard"
            width={1200}
            height={600}
            priority
            className="relative rounded-2xl border border-primary/20 shadow-2xl shadow-primary/20"
            data-ai-hint="app dashboard"
          />
        </div>
      </div>
    </section>
  );
}
