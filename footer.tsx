"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Classic Court Wedding Band",
    price: "£395",
    material: "18ct Yellow Gold",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&q=80",
    href: "#",
  },
  {
    id: 2,
    name: "Platinum D-Shape Ring",
    price: "£695",
    material: "950 Platinum",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&q=80",
    href: "#",
  },
  {
    id: 3,
    name: "Oxford Oval Signet",
    price: "£545",
    material: "9ct Rose Gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=80",
    href: "#",
  },
  {
    id: 4,
    name: "Diamond Solitaire",
    price: "£2,450",
    material: "18ct White Gold",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop&q=80",
    href: "#",
  },
  {
    id: 5,
    name: "Russian Trinity Ring",
    price: "£475",
    material: "9ct Three-Colour Gold",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop&q=80",
    href: "#",
  },
  {
    id: 6,
    name: "Cushion Signet Ring",
    price: "£425",
    material: "Sterling Silver",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&q=80",
    href: "#",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Bestsellers</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-balance">
              Most Loved Pieces
            </h2>
          </div>
          <Link
            href="#"
            className="text-sm tracking-wider uppercase hover:text-accent transition-colors underline underline-offset-4"
          >
            View All Products
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((product) => (
            <article key={product.id} className="group">
              <Link href={product.href} className="block">
                <div className="relative aspect-square overflow-hidden bg-card mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault()
                      // Add to wishlist logic
                    }}
                  >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>
                <div className="space-y-1">
                  <p className="text-xs tracking-wider text-muted-foreground uppercase">
                    {product.material}
                  </p>
                  <h3 className="text-sm md:text-base font-medium leading-tight group-hover:text-muted-foreground transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base font-light">{product.price}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
