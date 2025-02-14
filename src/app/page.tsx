import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Truck, Moon, ActivitySquare, Heart, AlignJustify, Shield, Zap, } from 'lucide-react'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 border-0">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] border-0">
              <Image
                alt="Colchón DreamSleep"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last border-0"
                height={550}
                src="/loginBackground.jpg"
                width={550}
              />
              <div className="flex flex-col justify-center space-y-4 border-0">
                <div className="space-y-2 border-0">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-dreamgold border-0">
                    Descubre el sueño perfecto
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl border-0">
                    Nuestros colchones están diseñados para brindarte el mejor descanso de tu vida. Calidad, comodidad y
                    tecnología en cada capa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row border-0">
                  <Link href="#contact">
                    <Button size="lg" className="bg-dreamblue text-white hover:bg-dreamblue/90 border-0">
                      Personaliza tu colchón
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-dreamblue text-dreamblue hover:bg-dreamblue hover:text-white"
                    >
                      Descubre más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-dreamgold">
              Características principales
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-white border-gray-200">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <CheckCircle className="h-12 w-12 text-dreamgold" />
                  <h3 className="text-xl font-bold text-dreamgold">Materiales de alta calidad</h3>
                  <p className="text-center text-gray-600">
                    Utilizamos los mejores materiales para garantizar durabilidad y comodidad.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Star className="h-12 w-12 text-dreamgold" />
                  <h3 className="text-xl font-bold text-dreamgold">Tecnología de soporte</h3>
                  <p className="text-center text-gray-600">
                    Diseño ergonómico que se adapta a tu cuerpo para un descanso óptimo.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Truck className="h-12 w-12 text-dreamgold" />
                  <h3 className="text-xl font-bold text-dreamgold">Envío gratuito</h3>
                  <p className="text-center text-gray-600">Entrega sin costo adicional en el Valle de Aburrá - Medellín.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="beneficios-salud" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-dreamgold">
              Beneficios para tu salud
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                {
                  title: "Mejora la postura",
                  description:
                    "Mantiene tu columna alineada durante la noche, contribuyendo a una mejor postura durante el día.",
                  icon: AlignJustify,
                },
                {
                  title: "Fortalece el sistema inmunológico",
                  description: "Un sueño de calidad potencia tu sistema inmune, ayudándote a mantenerte saludable.",
                  icon: Shield,
                },
                {
                  title: "Aumenta la productividad",
                  description: "Despertar descansado mejora tu concentración y rendimiento durante el día.",
                  icon: Zap,
                },
              ].map((benefit, index) => (
                <Card key={index} className="bg-white border-gray-200">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <div className="p-3 rounded-full bg-dreamblue">
                      {benefit.icon && <benefit.icon className="h-6 w-6 text-white" />}
                    </div>
                    <h3 className="text-xl font-bold text-dreamgold">{benefit.title}</h3>
                    <p className="text-center text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dreamgold">Prueba tu colchón hoy</h2>
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