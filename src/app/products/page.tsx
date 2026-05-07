import type { Metadata } from 'next'
import { products } from "@/data/products"
import { ProductCard } from "@/components/ProductCard/productCard"

const BASE_URL = 'https://hogardereyes.netlify.app'

export const metadata: Metadata = {
  title: 'Colchones, Combos y Almohadas en Medellín',
  description: 'Explora toda nuestra colección: combos con basecama desde $760.000, colchones Pillow desde $500.000 y almohadas desde $18.000. Entrega en Medellín.',
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
  openGraph: {
    title: 'Colchones, Combos y Almohadas — Hogar de Reyes',
    description: 'Combos desde $760.000 · Colchones desde $500.000 · Almohadas desde $18.000. Entrega en Medellín.',
    url: `${BASE_URL}/products`,
    images: [{ url: '/combo_soberano.png', width: 600, height: 600, alt: 'Combo Soberano — Hogar de Reyes' }],
  },
}

function buildProductJsonLd() {
  return products.map((product) => {
    const offer = product.hasSizes && product.sizes
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: 'COP',
          lowPrice: Math.min(...product.sizes.map((s) => s.price)),
          highPrice: Math.max(...product.sizes.map((s) => s.price)),
          offerCount: product.sizes.length,
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Hogar de Reyes' },
        }
      : {
          '@type': 'Offer',
          priceCurrency: 'COP',
          price: product.price,
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Hogar de Reyes' },
        }

    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: `${BASE_URL}${product.image}`,
      brand: { '@type': 'Brand', name: 'Hogar de Reyes' },
      offers: offer,
    }
  })
}

export default function ProductsPage() {
  const combos = products.filter(p => p.category === "combo")
  const colchones = products.filter(p => p.category === "colchon")
  const almohadas = products.filter(p => p.category === "almohada")

  const productSchemas = buildProductJsonLd()

  return (
    <>
      {productSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-abril-fatface)] text-center mb-4 text-[#CFA15C]">
          Nuestra Colección
        </h1>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto font-[family-name:var(--font-outfit)]">
          Descubre nuestra selección de combos, colchones y almohadas diseñados para brindarte el mejor descanso.
        </p>

        {/* Combos */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-abril-fatface)] text-black mb-8">
            Combos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {combos.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Colchones */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-abril-fatface)] text-black mb-8">
            Colchones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colchones.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Almohadas */}
        <section>
          <h2 className="text-2xl font-[family-name:var(--font-abril-fatface)] text-black mb-8">
            Almohadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {almohadas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
