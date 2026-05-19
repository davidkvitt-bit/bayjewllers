"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "From the moment we walked in, we felt welcomed. The team helped us find the perfect wedding bands. The craftsmanship is exceptional, and the service was personal and attentive.",
    author: "Emma & James",
    location: "London",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "I inherited my grandfather's signet ring and Bay Jewellers restored it beautifully while preserving its character. They truly understand the sentimental value of jewellery.",
    author: "William T.",
    location: "Cambridge",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "The bespoke engagement ring they created exceeded all my expectations. The attention to detail and patience throughout the design process was remarkable.",
    author: "Sarah M.",
    location: "Manchester",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Outstanding quality and service. They took the time to explain every option and helped us find rings within our budget without compromising on quality.",
    author: "David & Michael",
    location: "Brighton",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const go = (next: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(next)
      setIsAnimating(false)
    }, 200)
  }

  const next = () => go((currentIndex + 1) % testimonials.length)
  const prev = () => go((currentIndex - 1 + testimonials.length) % testimonials.length)

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 7000)
    return () => clearInterval(t)
  }, [currentIndex])

  const t = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Words from Our Clients</h2>
        </div>

        <div className="relative bg-card p-8 md:p-12 text-center">
          <Quote className="h-8 w-8 text-muted-foreground mx-auto mb-6 opacity-20" />

          <div className={`transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-foreground text-sm">★</span>
              ))}
            </div>

            <blockquote className="text-lg md:text-xl font-light leading-relaxed mb-8 text-pretty">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col items-center gap-3">
              <Image
                src={t.image}
                alt={t.author}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => go(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-foreground" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          4.9 / 5 based on 620+ verified Google reviews
        </p>
      </div>
    </section>
  )
}
