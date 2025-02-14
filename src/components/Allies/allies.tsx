import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const aliados = [
  {
    nombre: "Colchones Cristo Rey",
    logo: "/placeholder.svg",
    descripcion: "Innovadores en el descanso y la comodidad",
  },
  {
    nombre: "Galería Dulce Hogar",
    logo: "/placeholder.svg",
    descripcion: "Proveedor líder de productos de hogar",
  },
  {
    nombre: "Colchones Sensación",
    logo: "/placeholder.svg",
    descripcion: "Proveedor líder en materiales para colchones",
  }
]

export default function AlliesComponent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dreamgold text-center mb-12">Nuestros Aliados</h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        En Hogar de Reyes, nos enorgullece trabajar con los mejores en la industria. Nuestros aliados comparten nuestra
        pasión por la calidad y la innovación en el descanso.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aliados.map((aliado, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Image
                src={aliado.logo || "/placeholder.svg"}
                alt={`Logo de ${aliado.nombre}`}
                width={200}
                height={100}
                className="mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-dreamblue mb-2 text-center">{aliado.nombre}</h2>
              <p className="text-gray-600 text-center">{aliado.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

