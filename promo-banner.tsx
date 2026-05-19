"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const materials = [
  {
    name: "Platinum",
    description: "The rarest and most precious metal. Naturally white, hypoallergenic, and eternally lustrous. Platinum holds diamonds more securely than any other metal and grows more beautiful with age.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop&q=80",
    starting: "£595",
    facts: ["95% pure", "Naturally white", "Hypoallergenic"],
  },
  {
    name: "18ct Gold",
    description: "Timeless elegance in yellow, white, or rose. At 75% pure gold, 18ct strikes the perfect balance of richness and durability — the most popular choice for engagement and wedding rings.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&q=80",
    starting: "£395",
    facts: ["75% pure gold", "Yellow, white & rose", "Most popular choice"],
  },
  {
    name: "Titanium",
    description: "Lightweight, hypoallergenic, and incredibly strong — titanium is perfect for those with active lifestyles. Modern luxury for the contemporary wearer who values durability without compromise.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop&q=80",
    starting: "£195",
    facts: ["Virtually indestructible", "Featherlight", "Hypoallergenic"],
  },
]

export function MaterialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const material = materials[activeIndex]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Materials</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Precious Metals</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            {materials.map((m, i) => (
              <div
                key={m.name}
                className={`absolute inset-0 transition-opacity duration-500 ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
              >
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div>
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-border">
              {materials.map((m, index) => (
                <button
                  key={m.name}
                  onClick={() => setActiveIndex(index)}
                  className={`text-sm tracking-wider uppercase pb-3 border-b-2 -mb-px transition-colors ${
                    index === activeIndex
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-light mb-4">{material.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{material.description}</p>

            <div className="flex gap-6 mb-8">
              {material.facts.map((fact) => (
                <div key={fact} className="text-center">
                  <div className="w-px h-4 bg-border mx-auto mb-2" />
                  <p className="text-xs tracking-wider text-muted-foreground uppercase">{fact}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Starting from <span className="text-foreground font-medium text-base">{material.starting}</span>
            </p>

            <Button variant="outline" className="tracking-wider text-sm">
              Explore {material.name} Rings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
