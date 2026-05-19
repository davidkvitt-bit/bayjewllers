"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const instagramPosts = [
  {
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80",
    likes: 234,
    href: "https://instagram.com",
  },
  {
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&q=80",
    likes: 189,
    href: "https://instagram.com",
  },
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&q=80",
    likes: 312,
    href: "https://instagram.com",
  },
  {
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop&q=80",
    likes: 276,
    href: "https://instagram.com",
  },
  {
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&q=80",
    likes: 198,
    href: "https://instagram.com",
  },
  {
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop&q=80",
    likes: 245,
    href: "https://instagram.com",
  },
]

export function InstagramFeed() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Follow Us</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            @bayjewellers
          </h2>
          <p className="text-muted-foreground">
            Share your Bay Jewellers moments with #BayJewellers
          </p>
        </div>

        {/* Instagram grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
          {instagramPosts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        {/* Follow button */}
        <div className="text-center mt-10">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:text-muted-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}
