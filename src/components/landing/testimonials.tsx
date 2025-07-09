"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarRating } from "@/components/landing/StarRating";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, MH",
    rating: 5,
    review: "Cashible has completely changed how I see my finances. The automatic tracking is a lifesaver, and for the first time, I feel in control of my money. It's a must-have app for anyone in India!",
    initials: "PS",
  },
  {
    name: "Rohan Patel",
    location: "Ahmedabad, GJ",
    rating: 4.5,
    review: "Finally, a finance app that understands the Indian market! Linking my bank accounts was seamless. The budgeting tools are powerful yet so simple to use. Highly recommend it.",
    initials: "RP",
  },
  {
    name: "Ananya Reddy",
    location: "Bengaluru, KA",
    rating: 5,
    review: "As a freelancer, managing my income was a mess. Cashible brought so much clarity. The UI is beautiful and the insights are incredibly helpful. It's the best finance app I've used.",
    initials: "AR",
  },
  {
    name: "Vikram Singh",
    location: "Delhi, DL",
    rating: 5,
    review: "The 'Spend Circles' feature is genius for splitting bills with my roommates. It takes all the awkwardness out of asking for money. The app is slick and works flawlessly.",
    initials: "VS",
  },
  {
    name: "Sneha Iyer",
    location: "Chennai, TN",
    rating: 4.5,
    review: "I love the detailed reports and graphs. It's so motivating to see my savings grow month after month. Cashible is a powerful tool for financial planning.",
    initials: "SI",
  },
  {
    name: "Aditya Kumar",
    location: "Kolkata, WB",
    rating: 5,
    review: "I've tried many expense trackers, but Cashible is by far the most intuitive. The UI is clean, and the AI category suggestions are surprisingly accurate. 10/10!",
    initials: "AK",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Loved by Users Across India</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl/relaxed">
            See what our customers have to say about their journey to financial wellness with Cashible.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                 <div className="p-1 h-full">
                  <Card className="transform-gpu h-full bg-card/50 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-6 pt-0">
                      <StarRating rating={testimonial.rating} />
                      <p className="mt-4 text-foreground/90">"{testimonial.review}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 md:left-0 md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 bg-background/50 backdrop-blur-md hover:bg-primary/20 hidden md:flex"/>
          <CarouselNext className="absolute right-2 md:right-0 md:translate-x-1/2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 bg-background/50 backdrop-blur-md hover:bg-primary/20 hidden md:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
