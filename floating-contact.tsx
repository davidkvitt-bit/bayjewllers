"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const allProducts = [
  { id: 1, name: "Classic Court Wedding Band", material: "18ct Yellow Gold", price: 395, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop&q=80" },
  { id: 2, name: "Platinum D-Shape Ring", material: "950 Platinum", price: 695, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200&h=200&fit=crop&q=80" },
  { id: 3, name: "Oxford Oval Signet", material: "9ct Rose Gold", price: 545, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop&q=80" },
  { id: 4, name: "Diamond Solitaire", material: "18ct White Gold", price: 2450, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=200&h=200&fit=crop&q=80" },
  { id: 5, name: "Russian Trinity Ring", material: "9ct Three-Colour Gold", price: 475, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=200&h=200&fit=crop&q=80" },
  { id: 6, name: "Cushion Signet Ring", material: "Sterling Silver", price: 425, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=200&h=200&fit=crop&q=80" },
]

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("")

  const results = query.length > 1
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { onClose(); setQuery("") } }}>
      <DialogContent className="sm:max-w-2xl p-0 gap-0 top-[10%] translate-y-0">
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search rings, materials..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto p-2">
            {results.map((product) => (
              <button
                key={product.id}
                onClick={onClose}
                className="w-full flex items-center gap-4 p-3 hover:bg-secondary transition-colors text-left"
              >
                <div className="relative w-14 h-14 bg-secondary flex-shrink-0 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.material}</p>
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-sm font-light">£{product.price.toLocaleString()}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="px-4 py-12 text-center text-sm text-muted-foreground">
            No results for &ldquo;{query}&rdquo;
          </div>
        )}

        {query.length === 0 && (
          <div className="px-4 py-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {["Wedding bands", "Platinum", "Signet ring", "Diamond", "Rose gold"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="text-sm px-3 py-1.5 border border-border hover:bg-secondary transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
