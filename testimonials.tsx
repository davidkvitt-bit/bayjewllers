"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function BespokeSection() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section id="bespoke" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop&q=80"
                alt="Master craftsman at work"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Bespoke Service</p>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-balance">
                Your Vision, <br />
                <span className="italic">Our Craft</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Every love story is unique, and your ring should be too. Our master craftsmen bring
                  over four decades of experience to create bespoke pieces that capture your personal journey.
                </p>
                <p>
                  From initial consultation to final polish, we work closely with you to design and
                  handcraft a ring that will be treasured for generations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { step: "01", label: "Consult", desc: "Free 1-hour consultation in store or via video" },
                  { step: "02", label: "Design", desc: "Hand-drawn sketches & 3D CAD renders" },
                  { step: "03", label: "Craft", desc: "6–8 weeks handcrafted in our workshop" },
                ].map((item) => (
                  <div key={item.step} className="text-center group cursor-default">
                    <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-1 group-hover:text-foreground transition-colors">{item.step}</p>
                    <p className="text-sm tracking-wider uppercase mb-2">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-wider text-sm px-8"
                onClick={() => setDialogOpen(true)}
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation booking dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-light mb-2">Request Received</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Thank you! We&apos;ll contact you within 24 hours to confirm your consultation.
              </p>
              <Button variant="outline" onClick={() => { setDialogOpen(false); setSubmitted(false) }} className="tracking-wider text-sm">
                Close
              </Button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-light tracking-tight mb-1">Book a Consultation</h3>
              <p className="text-sm text-muted-foreground mb-6">Free, no-obligation. In store or via video call.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">First name</label>
                    <input required className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground transition-colors" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">Last name</label>
                    <input required className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground transition-colors" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">Email</label>
                  <input required type="email" className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">Phone</label>
                  <input className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground transition-colors" placeholder="07700 000000" />
                </div>
                <div>
                  <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">What are you looking for?</label>
                  <select className="w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground transition-colors">
                    <option>Wedding rings</option>
                    <option>Engagement ring</option>
                    <option>Signet ring</option>
                    <option>Other bespoke piece</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block">Preferred format</label>
                  <div className="flex gap-3">
                    {["In store", "Video call", "Phone call"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="format" value={opt} defaultChecked={opt === "In store"} className="accent-foreground" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                <Button type="submit" className="w-full tracking-wider text-sm py-6">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
