import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/lib/mockData";
import { Star } from "lucide-react";
export function Testimonials() {
  // Use two sets for a perfect infinite loop with percentage translation
  const marqueeTestimonials = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            客户反馈
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            全球数千名交易者信赖 Euro Stable EA，见证稳定增长的力量。
          </p>
        </div>
      </div>
      <div className="relative mt-8">
        {/* Gradient Masks for fading effect */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 py-4 px-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 90, // Slowed down from 30s to 90s for a more premium feel
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.author}-${index}`}
                className="w-[300px] md:w-[400px] flex-shrink-0 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow border-border/50"
              >
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground flex-grow italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-6">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${testimonial.author}`} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}