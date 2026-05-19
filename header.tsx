"use client"

import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp button */}
      <Link
        href="https://wa.me/442088029596?text=Hello%20Bay%20Jewellers,%20I%27d%20like%20to%20enquire%20about..."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background shadow-md hover:shadow-lg transition-all"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>

      {/* Phone button */}
      <Link
        href="tel:+442088029596"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background shadow-md hover:shadow-lg transition-all"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </Link>
    </div>
  )
}
