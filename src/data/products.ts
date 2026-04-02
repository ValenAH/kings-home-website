export type ProductSize = {
  value: string
  label: string
  medida: string
  price: number
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "colchon" | "almohada"
  hasSizes: boolean
  sizes?: ProductSize[]
}

export const colchonSizes: ProductSize[] = [
  { value: "individual", label: "Individual", medida: "100x190", price: 850000 },
  { value: "semidoble", label: "Semidoble", medida: "120x190", price: 950000 },
  { value: "doble", label: "Doble", medida: "140x190", price: 1100000 },
  { value: "queen", label: "Queen", medida: "160x190", price: 1300000 },
  { value: "king", label: "King", medida: "200x200", price: 1600000 },
]

export const products: Product[] = [
  {
    id: "emperador",
    name: "Emperador",
    description: "Doble Pillow - Nuestro colchón premium con doble capa de pillow top para máximo confort y soporte. Ideal para quienes buscan la experiencia de descanso más lujosa.",
    price: 850000,
    image: "/emperador_fondo.jpg",
    category: "colchon",
    hasSizes: true,
    sizes: colchonSizes.map(size => ({
      ...size,
      price: size.price + 200000
    }))
  },
  {
    id: "magnate",
    name: "Magnate",
    description: "One Pillow - Equilibrio perfecto entre firmeza y suavidad con una capa de pillow top. Diseñado para un descanso reparador noche tras noche.",
    price: 750000,
    image: "/magnate_fondo.png",
    category: "colchon",
    hasSizes: true,
    sizes: colchonSizes.map(size => ({
      ...size,
      price: size.price + 100000
    }))
  },
  {
    id: "rey",
    name: "Rey",
    description: "Estándar - Calidad excepcional a un precio accesible. Soporte firme y duradero para un descanso confortable cada noche.",
    price: 650000,
    image: "/rey_basecama_fondo.png",
    category: "colchon",
    hasSizes: true,
    sizes: colchonSizes
  },
  {
    id: "almohada-premium",
    name: "Almohada Premium",
    description: "Almohada de alta densidad con relleno de fibra siliconada. Suave al tacto y con excelente soporte para cuello y cabeza.",
    price: 89000,
    image: "/magnate_almohadas_optimized.png",
    category: "almohada",
    hasSizes: false
  }
]

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}
