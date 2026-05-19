import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Collections } from "@/components/collections"
import { FeaturedProducts } from "@/components/featured-products"
import { MaterialsSection } from "@/components/materials-section"
import { BespokeSection } from "@/components/bespoke-section"
import { StorySection } from "@/components/story-section"
import { Testimonials } from "@/components/testimonials"
import { InstagramFeed } from "@/components/instagram-feed"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"
import { PromoBanner } from "@/components/promo-banner"

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Collections />
        <FeaturedProducts />
        <MaterialsSection />
        <BespokeSection />
        <StorySection />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
