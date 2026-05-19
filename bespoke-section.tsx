"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, Phone, X, ChevronUp } from "lucide-react"

export function FloatingContact() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      {expanded && (
        <>
          <Link
            href="https://wa.me/442088029596?text=Hello%20Bay%20Jewellers,%20I%27d%20like%20to%20enquire%20about..."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 shadow-lg hover:bg-[#1db954] transition-colors text-sm tracking-wide"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp Us</span>
          </Link>
          <Link
            href="tel:+442088029596"
            className="flex items-center gap-3 bg-foreground text-background px-4 py-3 shadow-lg hover:bg-foreground/90 transition-colors text-sm tracking-wide"
          >
            <Phone className="h-4 w-4" />
            <span>020 8802 9596</span>
          </Link>
        </>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-12 h-12 rounded-full bg-foreground text-background shadow-lg hover:bg-foreground/90 transition-all flex items-center justify-center"
        aria-label={expanded ? "Close contact menu" : "Contact us"}
      >
        {expanded ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  )
}
