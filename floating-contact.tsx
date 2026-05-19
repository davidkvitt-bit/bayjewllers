"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "Wedding Rings",
    description: "Timeless bands in platinum, gold & titanium",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=1000&fit=crop&q=80",
    href: "#",
    featured: true,
  },
  {
    title: "Engagement Rings",
    description: "Diamonds & precious stones",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&q=80",
    href: "#",
  },
  {
    title: "Signet Rings",
    description: "Heritage designs for men & women",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop&q=80",
    href: "#",
  },
  {
    title: "Russian Rings",
    description: "Interlocking trinity bands",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop&q=80",
    href: "#",
  },
]

export function Collections() {
  return (
    <section id="collections" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Collections</p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-balance">
            Exquisite Craftsmanship
          </h2>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Featured large item */}
          <Link
            href={collections[0].href}
            className="group relative aspect-[4/5] md:row-span-2 overflow-hidden"
          >
            <Image
              src={collections[0].image}
              alt={collections[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-2">
                Featured Collection
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                {collections[0].title}
              </h3>
              <p className="text-white/80 font-light mb-4">{collections[0].description}</p>
              <span className="inline-flex items-center text-white text-sm tracking-wider group-hover:gap-3 gap-2 transition-all">
                Shop Now <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Other collections */}
          {collections.slice(1).map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-light text-white mb-1">
                  {collection.title}
                </h3>
                <p className="text-white/80 text-sm font-light mb-3">{collection.description}</p>
                <span className="inline-flex items-center text-white text-sm tracking-wider group-hover:gap-3 gap-2 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
