"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function CustomizeMattress() {
  const [firmeza, setFirmeza] = useState(50)
  const [tamano, setTamano] = useState("individual")
  const [material, setMaterial] = useState("memory_foam")
  const [showSummary, setShowSummary] = useState(false)
  const router = useRouter()

  const handleCrearColchon = () => {
    setShowSummary(true)
  }

  const handleConfirmarPedido = () => {
    setShowSummary(false)
    // Mostrar un mensaje de confirmación
    const toast = document.createElement("div")
    toast.className = "fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg"
    toast.textContent = "Colchón añadido al carrito"
    document.body.appendChild(toast)
    setTimeout(() => {
      document.body.removeChild(toast)
      router.push("/shopping-cart")
    }, 3000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-2xl font-bold text-dreamgold mb-6">Personaliza tu colchón ideal</h3>

      <div className="space-y-8">
        <div className="space-y-4">
          <label htmlFor="firmeza" className="block text-lg font-semibold">
            Firmeza
          </label>
          <input
            type="range"
            id="firmeza"
            min="0"
            max="100"
            step="1"
            value={firmeza}
            onChange={(e) => setFirmeza(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-600">
            {firmeza < 33 ? "Suave" : firmeza < 66 ? "Medio" : "Firme"} - {firmeza}%
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">Tamaño</p>
          <div className="flex flex-wrap gap-4">
            {["individual", "matrimonial", "queen", "king"].map((size) => (
              <label key={size} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="tamano"
                  value={size}
                  checked={tamano === size}
                  onChange={(e) => setTamano(e.target.value)}
                  className="form-radio text-dreamblue"
                />
                <span className="capitalize">{size}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">Material</p>
          <div className="flex flex-wrap gap-4">
            {[
              { value: "memory_foam", label: "Memory Foam" },
              { value: "latex", label: "Látex" },
              { value: "innerspring", label: "Resortes" },
              { value: "hybrid", label: "Híbrido" },
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="material"
                  value={option.value}
                  checked={material === option.value}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="form-radio text-dreamblue"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        className="w-full mt-8 bg-dreamblue text-white py-2 px-4 rounded hover:bg-dreamblue/90 transition-colors"
        onClick={handleCrearColchon}
      >
        Crear mi colchón personalizado
      </button>

      {showSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h4 className="text-xl font-bold mb-4">Resumen de tu colchón personalizado</h4>
            <p className="text-sm text-gray-600 mb-4">
              Revisa los detalles de tu colchón personalizado antes de añadirlo al carrito.
            </p>
            <div className="grid gap-4 mb-6">
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="font-semibold">Firmeza:</span>
                <span>
                  {firmeza < 33 ? "Suave" : firmeza < 66 ? "Medio" : "Firme"} - {firmeza}%
                </span>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="font-semibold">Tamaño:</span>
                <span className="capitalize">{tamano}</span>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="font-semibold">Material:</span>
                <span>
                  {material === "memory_foam"
                    ? "Memory Foam"
                    : material === "latex"
                      ? "Látex"
                      : material === "innerspring"
                        ? "Resortes"
                        : "Híbrido"}
                </span>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setShowSummary(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-dreamblue text-white rounded hover:bg-dreamblue/90 transition-colors"
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

