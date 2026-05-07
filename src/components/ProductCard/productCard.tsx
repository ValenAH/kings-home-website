"use client"

import { useState } from "react"
import Image from "next/image"
import { Product, formatPrice } from "@/data/products"
import { ChevronDown } from "lucide-react"
import { useCart } from "@/context/CartContext"

function parseLabel(label: string) {
  const match = label.match(/^(.*?)\s*\((.+)\)$/)
  return match ? { main: match[1], sub: match[2] } : { main: label, sub: null }
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(
    product.hasSizes && product.sizes ? product.sizes[0].value : ""
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const currentPrice = product.hasSizes && product.sizes
    ? product.sizes.find(s => s.value === selectedSize)?.price || product.price
    : product.price

  const currentSizeInfo = product.hasSizes && product.sizes
    ? product.sizes.find(s => s.value === selectedSize)
    : null

  const handleAddToCart = () => {
    const itemId = product.hasSizes && selectedSize
      ? `${product.id}-${selectedSize}`
      : product.id

    addItem({
      id: itemId,
      name: product.name,
      size: selectedSize || undefined,
      sizeLabel: currentSizeInfo ? `${currentSizeInfo.label} (${currentSizeInfo.medida})` : undefined,
      price: currentPrice,
      image: product.image,
    })

    const toast = document.createElement("div")
    toast.className = "fixed bottom-4 right-4 bg-[#CFA15C] text-white p-4 rounded shadow-lg font-[family-name:var(--font-outfit)] z-50"
    toast.textContent = `${product.name} añadido al carrito`
    document.body.appendChild(toast)
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 3000)
  }

  return (
    <div className="bg-white shadow-md group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 text-xs uppercase tracking-wide font-[family-name:var(--font-outfit)] font-semibold
            ${product.badge === 'Más vendido' ? 'bg-[#CFA15C] text-black' : ''}
            ${product.badge === 'Mejor precio' ? 'bg-black text-white' : ''}
            ${product.badge === 'Premium' ? 'bg-[#1E3A8A] text-white' : ''}
          `}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-[family-name:var(--font-abril-fatface)] text-[#CFA15C] mb-2">
          {product.name}
        </h3>

        <p className="text-gray-500 font-[family-name:var(--font-outfit)] text-sm mb-4">
          {product.description}
        </p>

        {product.hasSizes && product.sizes && (
          <div className="mb-4 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full py-3 px-4 !border !border-solid !border-gray-300 text-left font-[family-name:var(--font-outfit)] flex items-center justify-between hover:!border-[#CFA15C] transition-colors"
            >
              <span className="flex flex-col leading-tight">
                <span className="text-gray-700">
                  {parseLabel(currentSizeInfo?.label ?? '').main}
                  <span className="text-gray-400 ml-2">— {currentSizeInfo?.medida}</span>
                </span>
                {parseLabel(currentSizeInfo?.label ?? '').sub && (
                  <span className="text-xs text-gray-400 font-[family-name:var(--font-google-sans)]">
                    {parseLabel(currentSizeInfo?.label ?? '').sub}
                  </span>
                )}
              </span>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 right-0 bg-white !border !border-solid !border-gray-300 !border-t-0 z-10 shadow-lg max-h-60 overflow-y-auto"
                onWheel={(e) => e.stopPropagation()}
              >
                {product.sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => {
                      setSelectedSize(size.value)
                      setIsDropdownOpen(false)
                    }}
                    className={`w-full py-3 px-4 text-left font-[family-name:var(--font-outfit)] hover:bg-gray-50 flex justify-between items-center
                      ${selectedSize === size.value ? 'bg-gray-50 text-[#CFA15C]' : 'text-gray-700'}`}
                  >
                    <span className="flex flex-col leading-tight">
                      <span>
                        {parseLabel(size.label).main}
                        <span className="text-gray-400 text-sm ml-2">— {size.medida}</span>
                      </span>
                      {parseLabel(size.label).sub && (
                        <span className="text-xs text-gray-400 font-[family-name:var(--font-google-sans)]">
                          {parseLabel(size.label).sub}
                        </span>
                      )}
                    </span>
                    <span className="text-sm text-gray-400">{formatPrice(size.price)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-[family-name:var(--font-outfit)] font-semibold text-gray-800">
            {formatPrice(currentPrice)}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full py-3 px-6 bg-black text-white font-[family-name:var(--font-outfit)] text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}
