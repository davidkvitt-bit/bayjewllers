"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/hooks/use-wishlist"
import { addToCart } from "@/hooks/use-cart"
import { ProductModal } from "@/components/product-modal"

const ALL_PRODUCTS = [
  { id: 1, name: "Classic Court Wedding Band", price: 395, material: "18ct Yellow Gold", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&q=80", category: "wedding", badge: "Bestseller", sizes: ["H","I","J","K","L","M","N","O","P","Q","R"], description: "A timeless court-profile band in lustrous 18ct yellow gold. Smooth inside and out for all-day comfort. Available in widths from 2mm to 6mm." },
  { id: 2, name: "Platinum D-Shape Ring", price: 695, material: "950 Platinum", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&q=80", category: "wedding", badge: "", sizes: ["H","I","J","K","L","M","N","O","P"], description: "A classic D-shaped wedding band in 950 platinum — the most durable of all precious metals. Hallmarked at the London Assay Office." },
  { id: 3, name: "Oxford Oval Signet", price: 545, material: "9ct Rose Gold", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=80", category: "signet", badge: "", sizes: ["L","M","N","O","P","Q","R","S","T"], description: "An elegant oval signet in warm 9ct rose gold, ready for personalised engraving. Choose from monogram, family crest, or freehand design." },
  { id: 4, name: "Diamond Solitaire", price: 2450, material: "18ct White Gold", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop&q=80", category: "engagement", badge: "Popular", sizes: ["F","G","H","I","J","K","L","M","N"], description: "A brilliant round diamond solitaire in 18ct white gold with a classic four-claw setting. Certified diamond, ethically sourced." },
  { id: 5, name: "Russian Trinity Ring", price: 475, material: "9ct Three-Colour Gold", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop&q=80", category: "wedding", badge: "", sizes: ["H","I","J","K","L","M","N","O","P"], description: "Three interlocking bands in yellow, white, and rose 9ct gold — a symbol of past, present, and future. A truly unique wedding ring." },
  { id: 6, name: "Cushion Signet Ring", price: 425, material: "Sterling Silver", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&q=80", category: "signet", badge: "New", sizes: ["L","M","N","O","P","Q","R","S"], description: "A cushion-shaped signet in polished sterling silver — the perfect entry point to signet ring tradition. Ideal for engraving." },
  { id: 7, name: "Pavé Diamond Band", price: 1250, material: "18ct White Gold", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&q=80", category: "engagement", badge: "", sizes: ["G","H","I","J","K","L","M"], description: "A breathtaking row of pavé-set diamonds in 18ct white gold. Ideal as an engagement ring or stacking alongside your wedding band." },
  { id: 8, name: "Heavy Court Band", price: 595, material: "9ct Yellow Gold", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&q=80", category: "wedding", badge: "", sizes: ["M","N","O","P","Q","R","S","T"], description: "A substantial heavy court band in 9ct yellow gold. Chunky and confident — a true statement wedding ring for those who prefer weight." },
]

const FILTERS = [
  { label: "All Rings", value: "all" },
  { label: "Wedding", value: "wedding" },
  { label: "Engagement", value: "engagement" },
  { label: "Signet", value: "signet" },
]

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<typeof ALL_PRODUCTS[0] | null>(null)
  const { has, toggle } = useWishlist()

  const filtered = activeFilter === "all"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter((p) => p.category === activeFilter)

  const handleQuickAdd = (e: React.MouseEvent, product: typeof ALL_PRODUCTS[0]) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      name: product.name,
      material: product.material,
      price: product.price,
      image: product.image,
      size: product.sizes[Math.floor(product.sizes.length / 2)],
    })
  }

  const handleWishlist = (e: React.MouseEvent, id: number) => {
    e.preventDefault()
    e.stopPropagation()
    toggle(id)
  }

  return (
    <>
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Bestsellers</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Most Loved Pieces</h2>
            </div>
            <Link href="#" className="text-sm tracking-wider uppercase hover:text-muted-foreground transition-colors underline underline-offset-4">
              View All Products
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-0 border-b border-border mb-10 overflow-x-auto scrollbar-none">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-3 text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-colors relative ${
                  activeFilter === f.value
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
                {activeFilter === f.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {filtered.map((product) => (
              <article
                key={product.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-square overflow-hidden bg-card mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-wider uppercase px-2 py-1">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist */}
                  <button
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    onClick={(e) => handleWishlist(e, product.id)}
                    aria-label={has(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className="h-4 w-4 transition-colors"
                      fill={has(product.id) ? "currentColor" : "none"}
                    />
                  </button>

                  {/* Quick add */}
                  <button
                    className="absolute bottom-0 left-0 right-0 bg-foreground text-background text-[10px] tracking-[0.2em] uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                    onClick={(e) => handleQuickAdd(e, product)}
                  >
                    <ShoppingBag className="h-3 w-3" />
                    Quick Add
                  </button>
                </div>

                <div className="space-y-1">
                  <p className="text-xs tracking-wider text-muted-foreground uppercase">{product.material}</p>
                  <h3 className="text-sm md:text-base font-medium leading-tight group-hover:text-muted-foreground transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base font-light">£{product.price.toLocaleString()}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}
