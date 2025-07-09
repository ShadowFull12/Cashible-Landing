"use client"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { BrainCircuit, FileText, Repeat, Users, Palette, LayoutDashboard, Spline, Github, Sparkles } from "lucide-react"

const features = [
  {
    title: "Deep Dive Insights",
    description: "Track your monthly and all-time financial data with stunning graphs and visualizations for a clearer picture of your spending.",
    image: "https://i.postimg.cc/rmKThYGc/image-2025-07-09-194817187.png",
    hint: "data analysis"
  },
  {
    title: "Organized History",
    description: "Keep track of your finances in a properly organized way with filters by date, amount, category, and more for ultimate control.",
    image: "https://i.postimg.cc/RhpXgXRr/image-2025-07-09-195126460.png",
    hint: "transaction list"
  },
  {
    title: "Spend Circles",
    description: "Manage group expenses, split payments, and track who owes whom. Perfect for roommates and travel buddies.",
    image: "https://i.postimg.cc/fyjLM96b/image-2025-07-09-194111597.png",
    hint: "social finance"
  },
  {
    title: "Financial Calendar",
    description: "Stay on top of your bills and recurring payments with a full-fledged financial calendar. Never miss a due date again.",
    image: "https://i.postimg.cc/X7yz26TQ/image-2025-07-09-195300197.png",
    hint: "calendar schedule"
  },
  {
    title: "Total Customization",
    description: "Tailor Cashible to your needs. Edit spending categories, manage account details, and set up recurring expenses with ease.",
    image: "https://i.postimg.cc/Z5qkqd1M/image-2025-07-09-193928250.png",
    hint: "settings screen"
  },
];

const moreFeatures = [
  { icon: BrainCircuit, text: "AI Integrations", description: "Get smart category suggestions and in-depth data summaries." },
  { icon: FileText, text: "Monthly Reports", description: "Generate and export detailed monthly financial reports." },
  { icon: Repeat, text: "Recurring Payments", description: "Automate and manage your repeating bills and subscriptions." },
  { icon: Users, text: "Social Spend Circles", description: "Easily manage group expenses with friends and roommates." },
  { icon: Palette, text: "Multiple Themes", description: "Personalize your app experience with multiple accent colors." },
  { icon: LayoutDashboard, text: "Modern Dashboard", description: "Visualize your finances with a clean and intuitive interface." },
  { icon: Spline, text: "Split Payments", description: "Settle up shared costs for trips, rent, or dinners effortlessly." },
];

export function Features() {
    const renderFeatureCards = (keyPrefix: string) => (
    <>
      {moreFeatures.map((feature, index) => (
        <div key={`${keyPrefix}-${index}`} className="mx-2 flex-shrink-0 w-[250px] sm:w-[300px]">
          <div className="p-1 h-full">
            <div className="flex h-full flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-lg border border-border/50 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h4 className="font-headline text-xl font-semibold">{feature.text}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div key={`${keyPrefix}-more`} className="mx-2 flex-shrink-0 w-[250px] sm:w-[300px]">
        <div className="p-1 h-full">
          <div className="flex h-full flex-col items-center justify-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-lg border border-border/50 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
            <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
              <Sparkles className="h-8 w-8" />
            </div>
            <h4 className="font-headline text-xl font-semibold">And Much More</h4>
            <p className="mt-2 text-sm text-muted-foreground">We're constantly adding new features to make Cashible the ultimate finance app.</p>
          </div>
        </div>
      </div>
    </>
  );

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
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
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

        <div className="mt-24 text-center">
          <h3 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">...And it doesn't end there...</h3>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed">
            Cashible is packed with even more powerful features designed to give you complete financial control and a personalized experience.
          </p>
          <div className="group relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex animate-marquee motion-safe:group-hover:[animation-play-state:paused]">
              {renderFeatureCards('first')}
              {renderFeatureCards('second')}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center border-t border-border/50 pt-16">
          <h3 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">Available on Android</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            Take control of your finances on the go. Download the latest release from our official GitHub repository.
          </p>
          <Button size="lg" asChild className="mt-8">
            <Link href="https://github.com/ShadowFull12/Cashible-App/releases" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              Download from GitHub
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
