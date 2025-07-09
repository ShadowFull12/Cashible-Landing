import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StarRating } from "@/components/landing/StarRating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter md:text-5xl">Loved by Users Across India</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            See what our customers have to say about their journey to financial wellness with Cashible.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transform-gpu bg-card/50 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-foreground/90">"{testimonial.review}"</p>
              </CardContent>
              <CardHeader className="flex flex-row items-center gap-4 pt-0">
                <Avatar>
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
