"use client"

import { Truck, Shield, RefreshCw, Award } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free UK Delivery",
    description: "Complimentary insured shipping on all orders",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "All pieces covered for life against defects",
  },
  {
    icon: RefreshCw,
    title: "60-Day Returns",
    description: "Extended return window for complete peace of mind",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "Hallmarked by the London Assay Office",
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="h-5 w-5 mx-auto mb-3 text-muted-foreground" />
              <h3 className="text-sm font-medium mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
