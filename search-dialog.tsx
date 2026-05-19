"use client"

import Image from "next/image"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, removeFromCart, updateQuantity } from "@/hooks/use-cart"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, total } = useCart()

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-6 py-5 border-b border-border">
          <SheetTitle className="text-lg font-light tracking-wider">Your Bag ({items.reduce((s,i)=>s+i.quantity,0)})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground opacity-30" />
            <p className="font-light text-muted-foreground">Your bag is empty</p>
            <Button variant="outline" onClick={onClose} className="tracking-wider text-sm">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  <div className="relative w-20 h-20 bg-secondary flex-shrink-0 overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.material}</p>
                    <p className="text-sm font-medium leading-tight mb-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground mb-3">Size {item.size}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-border">
                        <button
                          className="w-7 h-7 flex items-center justify-center hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          className="w-7 h-7 flex items-center justify-center hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-light">£{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-muted-foreground hover:text-foreground transition-colors self-start"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-6 py-6 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm tracking-wider uppercase">Total</span>
                <span className="text-xl font-light">£{total.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout</p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider text-sm py-6">
                Checkout
              </Button>
              <Button variant="outline" className="w-full tracking-wider text-sm" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
