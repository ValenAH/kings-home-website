"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const tamanos = [
  { value: "individual", label: "Individual", medida: "100x190" },
  { value: "semidoble", label: "Semidoble", medida: "120x190" },
  { value: "doble", label: "Doble", medida: "140x190" },
  { value: "queen", label: "Queen", medida: "160x190" },
  { value: "king", label: "King", medida: "200x200" },
]

const referencias = [
  { value: "emperador", label: "Emperador", descripcion: "Doble Pillow" },
  { value: "magnate", label: "Magnate", descripcion: "One Pillow" },
  { value: "rey", label: "Rey", descripcion: "Estándar" },
]

export function CustomizeMattress() {
  const [tamano, setTamano] = useState("individual")
  const [referencia, setReferencia] = useState("emperador")
  const [showSummary, setShowSummary] = useState(false)
  const router = useRouter()
  
  const getTamanoInfo = () => tamanos.find(t => t.value === tamano)
  const getReferenciaInfo = () => referencias.find(r => r.value === referencia)

  const handleCrearColchon = () => {
    setShowSummary(true)
  }

  const handleConfirmarPedido = () => {
    setShowSummary(false)
    const toast = document.createElement("div")
    toast.className = "fixed bottom-4 right-4 bg-[#CFA15C] text-white p-4 rounded shadow-lg font-[family-name:var(--font-outfit)]"
    toast.textContent = "Colchón añadido al carrito"
    document.body.appendChild(toast)
    setTimeout(() => {
      document.body.removeChild(toast)
      router.push("/shopping-cart")
    }, 3000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-none p-8 md:p-12">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-lg font-[family-name:var(--font-outfit)] text-gray-800 uppercase tracking-wide">Tamaño</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tamanos.map((size) => (
              <button
                key={size.value}
                onClick={() => setTamano(size.value)}
                className={`py-4 px-4 !border !border-solid transition-colors font-[family-name:var(--font-outfit)] flex flex-col items-center
                  ${tamano === size.value 
                    ? "!border-[#CFA15C] bg-[#CFA15C] text-white" 
                    : "!border-gray-300 text-gray-700 hover:!border-[#CFA15C]"
                  }`}
              >
                <span className="font-medium">{size.label}</span>
                <span className={`text-xs mt-1 ${tamano === size.value ? "text-white/80" : "text-gray-400"}`}>{size.medida}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-[family-name:var(--font-outfit)] text-gray-800 uppercase tracking-wide">Referencia</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {referencias.map((ref) => (
              <button
                key={ref.value}
                onClick={() => setReferencia(ref.value)}
                className={`py-4 px-6 !border !border-solid transition-colors font-[family-name:var(--font-outfit)] flex flex-col items-center
                  ${referencia === ref.value 
                    ? "!border-[#CFA15C] bg-[#CFA15C] text-white" 
                    : "!border-gray-300 text-gray-700 hover:!border-[#CFA15C]"
                  }`}
              >
                <span className="font-medium">{ref.label}</span>
                <span className={`text-xs mt-1 ${referencia === ref.value ? "text-white/80" : "text-gray-400"}`}>{ref.descripcion}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        className="w-full mt-12 bg-black text-white py-4 px-8 font-[family-name:var(--font-outfit)] text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
        onClick={handleCrearColchon}
      >
        Crear mi colchón personalizado
      </button>

      {showSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 md:p-10 max-w-md w-full mx-4">
            <h4 className="text-2xl font-[family-name:var(--font-abril-fatface)] text-[#CFA15C] mb-4">
              Resumen de tu colchón
            </h4>
            <p className="text-sm text-gray-500 mb-6 font-[family-name:var(--font-outfit)]">
              Revisa los detalles antes de añadirlo al carrito.
            </p>
            <div className="space-y-4 mb-8 font-[family-name:var(--font-outfit)]">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500 uppercase text-sm tracking-wide">Tamaño</span>
                <span className="text-gray-800">{getTamanoInfo()?.label} <span className="text-gray-400">({getTamanoInfo()?.medida})</span></span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500 uppercase text-sm tracking-wide">Referencia</span>
                <span className="text-gray-800">{getReferenciaInfo()?.label} <span className="text-gray-400">({getReferenciaInfo()?.descripcion})</span></span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="flex-1 py-3 px-6 !border !border-solid !border-gray-300 text-gray-700 font-[family-name:var(--font-outfit)] text-sm uppercase tracking-wide hover:!border-gray-500 transition-colors"
                onClick={() => setShowSummary(false)}
              >
                Cancelar
              </button>
              <button
                className="flex-1 py-3 px-6 bg-black text-white font-[family-name:var(--font-outfit)] text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
                onClick={handleConfirmarPedido}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

