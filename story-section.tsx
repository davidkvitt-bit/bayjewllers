"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const materials = [
  {
    name: "Platinum",
    description: "The rarest and most precious metal. Naturally white, hypoallergenic, and eternally lustrous.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop&q=80",
    starting: "£595",
  },
  {
    name: "18ct Gold",
    description: "Timeless elegance in yellow, white, or rose. Perfect balance of purity and durability.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&q=80",
    starting: "£395",
  },
  {
    name: "Titanium",
    description: "Lightweight, hypoallergenic, and incredibly strong. Modern luxury for the contemporary wearer.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop&q=80",
    starting: "£195",
  },
]

export function MaterialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const material = materials[activeIndex]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Materials</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Precious Metals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={material.image}
              alt={material.name}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>

          {/* Content */}
          <div>
            {/* Material tabs */}
            <div className="flex gap-4 mb-8">
              {materials.map((m, index) => (
                <button
                  key={m.name}
                  onClick={() => setActiveIndex(index)}
                  className={`text-sm tracking-wider uppercase pb-2 border-b-2 transition-colors ${
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
            <p className="text-muted-foreground leading-relaxed mb-6">
              {material.description}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Starting from <span className="text-foreground font-medium">{material.starting}</span>
            </p>

            <Button 
              variant="outline" 
              className="tracking-wider text-sm"
            >
              Explore {material.name} Rings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
