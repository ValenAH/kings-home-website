import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/Header/header"
import { FloatingButtons } from "@/components/FloatingButtons/floatingButtons"
import { CartProvider } from "@/context/CartContext"
import Link from "next/link"
import type React from "react"

const googleSans = localFont({
  src: "../../public/fonts/GoogleSansFlex.ttf",
  variable: "--font-google-sans"
})

const abrilFatface = localFont({
  src: "../../public/fonts/AbrilFatface-Regular.ttf",
  variable: "--font-abril-fatface"
})

const outfit = localFont({
  src: "../../public/fonts/GoogleSansFlex.ttf",
  variable: "--font-outfit"
})

const BASE_URL = 'https://hogardereyes.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Hogar de Reyes — Colchones y Combos en Medellín',
    template: '%s | Hogar de Reyes',
  },
  description: 'Colchones, almohadas y combos de alta calidad con entrega en Medellín. Líneas Emperador, Magnate y Rey desde $500.000 COP. ¡Asesoría gratis por WhatsApp!',
  keywords: [
    'colchones Medellín',
    'combo colchón basecama Medellín',
    'colchón queen Medellín',
    'almohadas Colombia',
    'colchón pillow top',
    'colchón semiortopédico precio',
    'Hogar de Reyes colchones',
  ],
  authors: [{ name: 'Hogar de Reyes' }],
  creator: 'Hogar de Reyes',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: BASE_URL,
    siteName: 'Hogar de Reyes',
    title: 'Hogar de Reyes — Colchones y Combos en Medellín',
    description: 'Colchones, almohadas y combos de alta calidad con entrega en Medellín. Líneas Emperador, Magnate y Rey desde $500.000 COP.',
    images: [
      {
        url: '/magnate_almohadas_optimized.png',
        width: 900,
        height: 900,
        alt: 'Colchones Hogar de Reyes — Medellín',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hogar de Reyes — Colchones y Combos en Medellín',
    description: 'Colchones, almohadas y combos desde $500.000 COP. Entrega en Medellín.',
    images: ['/magnate_almohadas_optimized.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hogar de Reyes',
  description: 'Venta de colchones, almohadas y combos de alta calidad en Medellín, Colombia.',
  url: BASE_URL,
  telephone: '+573196835927',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellín',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  priceRange: '$$',
  image: `${BASE_URL}/magnate_almohadas_optimized.png`,
  sameAs: [`https://wa.me/573196835927`],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${googleSans.className} ${abrilFatface.variable} ${outfit.variable} relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CartProvider>
          <Header />
          {children}
          <FloatingButtons />
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-gray-100">
            <p className="text-xs text-gray-600">© 2024 Hogar de Reyes. Todos los derechos reservados.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:text-dreamgold" href="#">
                Términos de servicio
              </Link>
              <Link className="text-xs hover:text-dreamgold" href="#">
                Política de privacidad
              </Link>
            </nav>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
