"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  shop: [
    { name: "Wedding Rings", href: "#" },
    { name: "Engagement Rings", href: "#" },
    { name: "Signet Rings", href: "#" },
    { name: "Russian Rings", href: "#" },
    { name: "Bespoke", href: "#" },
  ],
  help: [
    { name: "Ring Size Guide", href: "#" },
    { name: "Delivery & Returns", href: "#" },
    { name: "Care Instructions", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  company: [
    { name: "Our Story", href: "#story" },
    { name: "Craftsmanship", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter section */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Join the Bay Family
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Subscribe for exclusive previews, offers, and inspiration
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/50"
              />
              <Button className="bg-white text-primary hover:bg-white/90 tracking-wider text-sm px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl tracking-[0.2em] font-light">BAY JEWELLERS</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Family-owned British jewellers crafting exquisite rings since 1983.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="h-4 w-4 text-primary-foreground/50" />
                <a href="tel:+442088029596" className="hover:text-primary-foreground transition-colors">
                  020 8802 9596
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="h-4 w-4 text-primary-foreground/50" />
                <a href="mailto:hello@bayjewellers.co.uk" className="hover:text-primary-foreground transition-colors">
                  hello@bayjewellers.co.uk
                </a>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-primary-foreground/50 mt-0.5" />
                <span>
                  123 High Street<br />
                  London N16 8QY
                </span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="h-4 w-4 text-primary-foreground/50" />
                <span>Mon-Sat: 10am - 6pm</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © 2026 Bay Jewellers Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/50">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
