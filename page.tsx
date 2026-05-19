import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Bay Jewellers | Premium Wedding & Signet Rings | Est. 1983',
  description: 'Family-owned British jewellers crafting exquisite wedding rings, signet rings, and bespoke pieces since 1983. Handcrafted in platinum, gold, and titanium.',
  keywords: ['wedding rings', 'signet rings', 'engagement rings', 'UK jewellers', 'platinum rings', 'gold rings', 'custom jewelry'],
  authors: [{ name: 'Bay Jewellers' }],
  openGraph: {
    title: 'Bay Jewellers | Premium Wedding & Signet Rings',
    description: 'Family-owned British jewellers crafting exquisite wedding rings and bespoke pieces since 1983.',
    type: 'website',
    locale: 'en_GB',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a18',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
