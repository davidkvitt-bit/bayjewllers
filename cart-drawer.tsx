"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useWishlist } from "@/hooks/use-wishlist"
import { addToCart } from "@/hooks/use-cart"

interface Product {
  id: number
  name: string
  material: string
  price: number
  image: string
  sizes: string[]
  description: string
  badge?: string
}

interface ProductModalProps {
  product: Product
  open: boolean
  onClose: () => void
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sizeError, setSizeError] = useState(false)
  const [added, setAdded] = useState(false)
  const { has, toggle } = useWishlist()

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true)
      setTimeout(() => setSizeError(false), 2000)
      return
    }
    addToCart({
      id: product.id,
      name: product.name,
      material: product.material,
      price: product.price,
      image: product.image,
      size: selectedSize,
    })
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      onClose()
    }, 1200)
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { onClose(); setSelectedSize(null); setAdded(false) } }}>
      <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden max-h-[95svh] overflow-y-auto">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square bg-secondary">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-foreground text-background text-[10px] tracking-wider uppercase px-2 py-1">
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="p-8 md:p-10 flex flex-col">
            <button
              onClick={onClose}
              className="self-end text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{product.material}</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">{product.name}</h2>
            <p className="text-2xl font-light mb-6">£{product.price.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Size selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <p className={`text-xs tracking-[0.2em] uppercase transition-colors ${sizeError ? "text-red-500" : ""}`}>
                  {sizeError ? "Please select a size" : "Select ring size"}
                </p>
                <button className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors">
                  Size guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setSizeError(false) }}
                    className={`w-10 h-10 text-sm border transition-all ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              <Button
                onClick={handleAddToCart}
                className={`w-full py-6 tracking-wider text-sm transition-all ${
                  added ? "bg-green-700 hover:bg-green-700" : "bg-primary hover:bg-primary/90"
                } text-primary-foreground`}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {added ? "Added to bag ✓" : "Add to Bag"}
              </Button>
              <Button
                variant="outline"
                onClick={() => toggle(product.id)}
                className="w-full py-6 tracking-wider text-sm"
              >
                <Heart
                  className="mr-2 h-4 w-4"
                  fill={has(product.id) ? "currentColor" : "none"}
                />
                {has(product.id) ? "Saved to Wishlist" : "Save to Wishlist"}
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border space-y-2">
              <p className="text-xs text-muted-foreground">✓ Free UK delivery on this order</p>
              <p className="text-xs text-muted-foreground">✓ Lifetime warranty included</p>
              <p className="text-xs text-muted-foreground">✓ Hallmarked at the London Assay Office</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
