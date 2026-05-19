"use client"

import { useState } from "react"
import { X } from "lucide-react"

const PROMOS = [
  "FREE ENGRAVING — Personalise your ring with a complimentary inscription this month",
  "FREE UK DELIVERY — On all orders over £300",
  "INTEREST-FREE FINANCE — Spread the cost over 12 months with 0% APR",
]

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [index, setIndex] = useState(0)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center relative overflow-hidden">
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setIndex((i) => (i - 1 + PROMOS.length) % PROMOS.length)}
          className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hidden sm:block text-xs"
        >
          ‹
        </button>
        <p className="text-xs md:text-sm tracking-wider flex-1 max-w-xl">
          {PROMOS[index]}
        </p>
        <button
          onClick={() => setIndex((i) => (i + 1) % PROMOS.length)}
          className="text-primary-foreground/50 hover:text-primary-foreground transition-colors hidden sm:block text-xs"
        >
          ›
        </button>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-foreground/10 rounded transition-colors"
        aria-label="Close banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
