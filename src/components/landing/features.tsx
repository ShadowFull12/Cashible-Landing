"use client"
import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const features = [
  {
    title: "Unified Dashboard",
    description: "Get a complete overview of your financial health in one place. Track your income, expenses, and investments with our intuitive dashboard.",
    image: "https://placehold.co/800x600.png",
    hint: "dashboard chart"
  },
  {
    title: "Smart Budgeting",
    description: "Create custom budgets that work for you. We'll help you stay on track with smart alerts and insights based on your spending habits.",
    image: "https://placehold.co/800x600.png",
    hint: "budget categories"
  },
  {
    title: "Expense Tracking",
    description: "Automatically categorize your transactions from bank accounts and credit cards. Say goodbye to manual entry and hello to clarity.",
    image: "https://placehold.co/800x600.png",
    hint: "expense list"
  },
  {
    title: "Investment Portfolio",
    description: "Monitor your stocks, mutual funds, and other investments in real-time. Make informed decisions with our powerful analytics.",
    image: "https://placehold.co/800x600.png",
    hint: "investment portfolio"
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter md:text-5xl">Why You'll Love Cashible</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Everything you need for financial clarity and success, all in one app.
          </p>
        </div>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="transform-gpu h-full overflow-hidden border-2 border-transparent bg-card/50 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="flex aspect-video flex-col items-center justify-center p-0">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                        data-ai-hint={feature.hint}
                      />
                    </CardContent>
                    <div className="p-6">
                      <h3 className="font-headline text-2xl font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-muted-foreground">{feature.description}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-14 w-14 bg-background/50 backdrop-blur-md hover:bg-primary/20"/>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 h-14 w-14 bg-background/50 backdrop-blur-md hover:bg-primary/20"/>
        </Carousel>
      </div>
    </section>
  )
}
