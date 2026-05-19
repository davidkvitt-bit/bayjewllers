"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center relative">
      <p className="text-xs md:text-sm tracking-wider">
        FREE ENGRAVING
        {" "}&mdash;{" "}
        Personalise your ring with a complimentary inscription this month
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-foreground/10 rounded transition-colors"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
