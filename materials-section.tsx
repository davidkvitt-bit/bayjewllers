"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

const slides = [
  {
    title: "Crafted for Forever",
    subtitle: "Wedding Rings",
    description: "Handcrafted in precious metals, designed to symbolise your eternal love",
    cta: "Explore Wedding Rings",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&h=1080&fit=crop&q=80",
  },
  {
    title: "Heritage in Gold",
    subtitle: "Signet Rings",
    description: "Traditional craftsmanship meets contemporary design",
    cta: "Discover Signets",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&h=1080&fit=crop&q=80",
  },
  {
    title: "Say Yes",
    subtitle: "Engagement Rings",
    description: "Begin your journey with a ring as unique as your love story",
    cta: "View Engagement",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1920&h=1080&fit=crop&q=80",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6 text-white/70 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {slide.subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 text-balance">
          {slide.title}
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 md:mb-12 max-w-2xl mx-auto opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 text-pretty">
          {slide.description}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-foreground hover:bg-white/90 tracking-wider text-sm px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500"
        >
          {slide.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        {/* Slide indicators */}
        <div className="flex justify-center gap-3 mt-12 md:mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-0.5 transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  )
}
