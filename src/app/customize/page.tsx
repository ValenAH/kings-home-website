import { CustomizeMattress } from "@/components/CustomizeMattress/customizeMattress"

export default function CustomizePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-dreamgold">
        Personaliza tu colchón
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Crea el colchón perfecto para ti. Personaliza la firmeza, tamaño y material para asegurar el mejor descanso
        posible.
      </p>
      <CustomizeMattress />
    </div>
  )
}