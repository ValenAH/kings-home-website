import { CustomizeMattress } from "@/components/CustomizeMattress/customizeMattress"

export default function CustomizePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-abril-fatface)] text-center mb-6 text-[#CFA15C]">
          Personaliza tu colchón
        </h1>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto font-[family-name:var(--font-outfit)]">
          Crea el colchón perfecto para ti. Selecciona el tamaño y material para asegurar el mejor descanso posible.
        </p>
        <CustomizeMattress />
      </div>
    </div>
  )
}
