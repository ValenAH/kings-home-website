import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, ActivitySquare, Heart } from 'lucide-react'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="flex-1">
        <section className="w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 xl:pt-56 xl:pb-48 bg-[#0a0a0a] relative overflow-hidden">
          {/* Gradiente radial en la esquina superior izquierda */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#b1c8ea_0,_#305f9f_0%,_transparent_40%)]"></div>
          <div className="container px-8 md:px-12 lg:px-16 xl:px-20 border-0 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] border-0">
              <Image
                alt="Colchón Magnate con almohadas"
                className="mx-auto overflow-hidden rounded-xl object-contain sm:w-full lg:order-last border-0"
                height={900}
                src="/magnate_almohadas_optimized.png"
                width={900}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
              <div className="flex flex-col justify-center border-0">
                <div className="border-0">
                  <h1 className="text-4xl sm:text-5xl xl:text-6xl text-[#CFA15C] border-0 font-[family-name:var(--font-abril-fatface)]">
                    Dormir bien puede<br />cambiar tu vida
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-lg border-0 mt-10 font-[family-name:var(--font-outfit)]">
                    Colchones diseñados para transformar la forma en que duermes
                  </p>
                </div>
                <div className="mt-12">
                  <Link
                    href="https://wa.me/573196835927"
                    target="_blank"
                    className="inline-block px-8 py-4 !border !border-solid !border-gray-500 text-[#C8C6C6] font-[family-name:var(--font-outfit)] text-sm uppercase tracking-wide hover:!border-white hover:text-white transition-colors"
                  >
                    Asesoría personalizada
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Crafted for Comfort */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-abril-fatface)] text-black mb-6">
              Diseñados para un confort inigualable
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-lg font-[family-name:var(--font-outfit)] mb-10">
              Experimenta el pináculo del lujo en el descanso con nuestros colchones excepcionales. Diseñados para adaptarse a los contornos únicos de tu cuerpo.
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-black text-white font-[family-name:var(--font-outfit)] text-sm tracking-wide hover:bg-gray-800 transition-colors"
            >
              Explorar colección
            </Link>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-5xl text-center mb-12 text-dreamgold font-[family-name:var(--font-abril-fatface)]">
              La diferencia se siente desde la primera noche
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  title: "Mejora la calidad del sueño",
                  description:
                    "Nuestro diseño ergonómico promueve un sueño más profundo y reparador, ayudándote a despertar renovado.",
                  icon: Moon,
                },
                {
                  title: "Alivia el dolor de espalda",
                  description:
                    "El soporte adecuado reduce la tensión en la columna vertebral, aliviando dolores y molestias.",
                  icon: ActivitySquare,
                },
                {
                  title: "Reduce el estrés",
                  description:
                    "Un buen descanso nocturno ayuda a regular los niveles de cortisol, reduciendo el estrés diario.",
                  icon: Heart,
                },
              ].map((benefit, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <div className="p-3 rounded-full bg-dreamblue">
                      {benefit.icon && <benefit.icon className="h-6 w-6 text-white" />}
                    </div>
                    <h3 className="text-xl text-dreamgold font-[family-name:var(--font-abril-fatface)]">{benefit.title}</h3>
                    <p className="text-center text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Sección Colección de Colchones */}
        <section id="coleccion" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-5xl text-center mb-12 text-dreamgold font-[family-name:var(--font-abril-fatface)]">
              Nuestra Colección
            </h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900">
                <Image
                  src="/emperador_fondo.jpg"
                  alt="Colchón Emperador"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900">
                <Image
                  src="/rey_basecama_fondo.png"
                  alt="Colchón Rey con base cama"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-900">
                <Image
                  src="/magnate_fondo.png"
                  alt="Colchón Magnate"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl sm:text-5xl text-dreamgold font-[family-name:var(--font-abril-fatface)]">Prueba tu colchón hoy</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Date el gusto de probar un colchón de calidad y al mejor precio
              </p>
              <Link href="/customize">
                <Button size="lg" className="bg-dreamblue text-white hover:bg-dreamblue/90">
                  Comprar ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
