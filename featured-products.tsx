"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { CartDrawer } from "@/components/cart-drawer"
import { SearchDialog } from "@/components/search-dialog"

const navigation = [
  { name: "Wedding Rings", href: "#collections" },
  { name: "Engagement", href: "#collections" },
  { name: "Signet Rings", href: "#collections" },
  { name: "Bespoke", href: "#bespoke" },
  { name: "Our Story", href: "#story" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems } = useCart()
  const { count: wishlistCount } = useWishlist()

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>

            {/* Logo */}
            <Link href="/" className="flex-1 md:flex-none text-center md:text-left">
              <span className="text-lg md:text-xl tracking-[0.15em] md:tracking-[0.2em] font-light">
                BAY JEWELLERS
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:gap-8 lg:gap-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm tracking-wider font-light hover:text-muted-foreground transition-colors uppercase"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex hover:bg-transparent"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex hover:bg-transparent relative"
                onClick={() => {}}
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-foreground text-background text-[10px] flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent relative"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-foreground text-background text-[10px] flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-lg tracking-[0.2em] font-light">BAY JEWELLERS</span>
            <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-light tracking-wide border-b border-border pb-4 hover:text-muted-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <p className="text-sm text-muted-foreground mb-2">Contact Us</p>
            <a href="tel:+442088029596" className="text-lg font-light">020 8802 9596</a>
          </div>
        </div>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
