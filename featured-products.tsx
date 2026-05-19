"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BespokeSection() {
  return (
    <section id="bespoke" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop&q=80"
              alt="Master craftsman at work"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Bespoke Service</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-balance">
              Your Vision, <br />
              <span className="italic">Our Craft</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Every love story is unique, and your ring should be too. Our master craftsmen bring 
                over four decades of experience to create bespoke pieces that capture your personal journey.
              </p>
              <p>
                From initial consultation to final polish, we work closely with you to design and 
                handcraft a ring that will be treasured for generations.
              </p>
            </div>

            {/* Process steps */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { step: "01", label: "Consult" },
                { step: "02", label: "Design" },
                { step: "03", label: "Craft" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-1">{item.step}</p>
                  <p className="text-sm tracking-wider uppercase">{item.label}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider text-sm px-8"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
