"use client"

import Image from "next/image"

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">Est. 1983</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-balance">
              A Family Legacy of Fine Craftsmanship
            </h2>
            <div className="space-y-4 text-primary-foreground/80 leading-relaxed mb-8">
              <p>
                For over four decades, the Bay family has been crafting exceptional rings 
                from our North London workshop. What began as a small family business has 
                grown into one of the UK&apos;s most trusted names in fine jewellery.
              </p>
              <p>
                Every piece that leaves our workshop carries our commitment to quality, 
                attention to detail, and the personal touch that only a family business can provide. 
                We&apos;re proud to have been part of thousands of love stories.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-primary-foreground/20">
              {[
                { value: "40+", label: "Years Experience" },
                { value: "50k+", label: "Rings Crafted" },
                { value: "4.9★", label: "Customer Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-light text-primary-foreground mb-1">{stat.value}</p>
                  <p className="text-xs md:text-sm tracking-wider uppercase text-primary-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop&q=80"
                alt="Bay Jewellers workshop"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary-foreground/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
