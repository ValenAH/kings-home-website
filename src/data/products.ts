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
  category: "colchon" | "almohada" | "combo"
  hasSizes: boolean
  sizes?: ProductSize[]
  badge?: string
}

export const products: Product[] = [
  {
    id: "emperador",
    name: "Emperador",
    description: "Doble Pillow - Nuestro colchón premium con doble capa de pillow top para máximo confort y soporte. Ideal para quienes buscan la experiencia de descanso más lujosa.",
    price: 800000,
    image: "/emperador_fondo.jpg",
    category: "colchon",
    badge: "Premium",
    hasSizes: true,
    sizes: [
      { value: "individual", label: "Individual", medida: "100x190", price: 800000 },
      { value: "semidoble", label: "Semidoble", medida: "120x190", price: 1050000 },
      { value: "doble", label: "Doble", medida: "140x190", price: 1200000 },
      { value: "queen", label: "Queen", medida: "160x190", price: 1500000 },
      { value: "king", label: "King", medida: "200x200", price: 1900000 },
    ]
  },
  {
    id: "magnate",
    name: "Magnate",
    description: "Un Pillow - Equilibrio perfecto entre firmeza y suavidad con una capa de pillow top. Diseñado para un descanso reparador noche tras noche.",
    price: 680000,
    image: "/magnate_fondo.png",
    category: "colchon",
    badge: "Más vendido",
    hasSizes: true,
    sizes: [
      { value: "individual", label: "Individual", medida: "100x190", price: 680000 },
      { value: "semidoble", label: "Semidoble", medida: "120x190", price: 800000 },
      { value: "doble", label: "Doble", medida: "140x190", price: 980000 },
      { value: "queen", label: "Queen", medida: "160x190", price: 1200000 },
      { value: "king", label: "King", medida: "200x200", price: 1550000 },
    ]
  },
  {
    id: "rey",
    name: "Rey",
    description: "Semiortopédico - Calidad excepcional a un precio accesible. Soporte firme y duradero para un descanso confortable cada noche.",
    price: 500000,
    image: "/rey.png",
    category: "colchon",
    badge: "Mejor precio",
    hasSizes: true,
    sizes: [
      { value: "individual", label: "Individual", medida: "100x190", price: 500000 },
      { value: "semidoble", label: "Semidoble", medida: "120x190", price: 550000 },
      { value: "doble", label: "Doble", medida: "140x190", price: 600000 },
      { value: "queen", label: "Queen", medida: "160x190", price: 950000 },
      { value: "king", label: "King", medida: "200x200", price: 1120000 },
    ]
  },
  {
    id: "almohada-duque",
    name: "Almohada Duque",
    description: "Almohada económica con excelente relación calidad-precio. Suave y cómoda para un descanso reparador.",
    price: 18000,
    image: "/almohada_duque.png",
    category: "almohada",
    hasSizes: false
  },
  {
    id: "almohada-imperial",
    name: "Almohada Imperial",
    description: "Almohada premium de alta densidad con relleno de fibra siliconada. Suave al tacto y con excelente soporte para cuello y cabeza.",
    price: 38000,
    image: "/almohada_imperial.png",
    category: "almohada",
    hasSizes: false
  },
  {
    id: "combo-soberano",
    name: "Combo Soberano",
    description: "Colchón Emperador + Basecama + Almohadas Imperiales. El pack completo para el descanso más lujoso.",
    price: 1060000,
    image: "/combo_soberano.png",
    category: "combo",
    badge: "Premium",
    hasSizes: true,
    sizes: [
      { value: "individual", label: "Individual (1 almohada)", medida: "100x190", price: 1060000 },
      { value: "semidoble", label: "Semidoble (2 almohadas)", medida: "120x190", price: 1350000 },
      { value: "doble", label: "Doble (2 almohadas)", medida: "140x190", price: 1550000 },
      { value: "queen", label: "Queen (2 almohadas)", medida: "160x190", price: 2010000 },
      { value: "king", label: "King (2 almohadas)", medida: "200x200", price: 2450000 },
    ]
  },
  {
    id: "combo-almirante",
    name: "Combo Almirante",
    description: "Colchón Magnate + Basecama + Almohadas Imperiales. Equilibrio perfecto entre confort y precio.",
    price: 940000,
    image: "/combo_almirante.png",
    category: "combo",
    badge: "Más vendido",
    hasSizes: true,
    sizes: [
      { value: "individual", label: "Individual (1 almohada)", medida: "100x190", price: 940000 },
      { value: "semidoble", label: "Semidoble (2 almohadas)", medida: "120x190", price: 1100000 },
      { value: "doble", label: "Doble (2 almohadas)", medida: "140x190", price: 1330000 },
      { value: "queen", label: "Queen (2 almohadas)", medida: "160x190", price: 1710000 },
      { value: "king", label: "King (2 almohadas)", medida: "200x200", price: 2100000 },
    ]
  },
  {
    id: "combo-conde",
    name: "Combo Conde",
    description: "Colchón Rey + Basecama + Almohadas Imperiales. Calidad excepcional al mejor precio.",
    price: 760000,
    image: "/combo_conde.png",
    category: "combo",
    badge: "Mejor precio",
    hasSizes: true,
    sizes: [
      { value: "individual", label: "Individual (1 almohada)", medida: "100x190", price: 760000 },
      { value: "semidoble", label: "Semidoble (2 almohadas)", medida: "120x190", price: 850000 },
      { value: "doble", label: "Doble (2 almohadas)", medida: "140x190", price: 950000 },
      { value: "queen", label: "Queen (2 almohadas)", medida: "160x190", price: 1460000 },
      { value: "king", label: "King (2 almohadas)", medida: "200x200", price: 1670000 },
    ]
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
