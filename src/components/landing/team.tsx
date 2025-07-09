import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Aritra Mukherjee",
    role: "Front End Engineer",
    image: "", // No image provided, will use fallback
    initials: "AM",
    links: {
      mail: "mailto:aritramukherjee1233@gmail.com",
      github: "https://github.com/ShadowFull12",
      linkedin: "https://www.linkedin.com/in/aritra-mukherjee-899562329/",
    },
  },
];

export function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter md:text-5xl">Meet the Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl/relaxed">
            The passionate minds behind Cashible, dedicated to simplifying your financial life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {teamMembers.map((member, index) => (
            <Card key={index} className="w-full max-w-sm mx-auto bg-card/50 backdrop-blur-lg border-border">
              <CardHeader className="items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : (
                    <AvatarFallback className="text-4xl font-headline">
                      {member.initials}
                    </AvatarFallback>
                  )}
                </Avatar>
                <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                <p className="text-primary">{member.role}</p>
              </CardHeader>
              <CardFooter className="justify-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href={member.links.mail} target="_blank"><Mail className="h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={member.links.github} target="_blank"><Github className="h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={member.links.linkedin} target="_blank"><Linkedin className="h-5 w-5" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          {/* Placeholder cards */}
          {[...Array(2)].map((_, index) => (
            <Card key={`placeholder-${index}`} className="w-full max-w-sm mx-auto bg-card/50 backdrop-blur-lg border-border">
              <CardHeader className="items-center text-center">
                <Skeleton className="h-24 w-24 rounded-full mb-4" />
                <Skeleton className="h-7 w-40 mb-1" />
                <Skeleton className="h-5 w-32" />
              </CardHeader>
              <CardFooter className="justify-center gap-4">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-10 w-10 rounded-md" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
