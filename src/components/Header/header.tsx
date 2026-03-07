import Link from "next/link"
import { BedDouble, ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="px-8 md:px-12 lg:px-16 xl:px-20 h-16 flex items-center bg-transparent absolute top-0 left-0 right-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <BedDouble className="h-6 w-6 mr-2 text-white" />
        <span className="text-white font-[family-name:var(--font-abril-fatface)] text-xl">Hogar de Reyes</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 font-[family-name:var(--font-outfit)] uppercase">
        <Link className="text-sm font-normal text-[#C8C6C6] hover:text-dreamgold" href="/">
          Inicio
        </Link>
        <Link className="text-sm font-normal text-[#C8C6C6] hover:text-dreamgold" href="/customize">
          Personalizar
        </Link>
        <Link className="text-sm font-normal text-[#C8C6C6] hover:text-dreamgold" href="/allies">
          Aliados
        </Link>
        <Link className="text-sm font-normal text-[#C8C6C6] hover:text-dreamgold" href="/#contact">
          Contacto
        </Link>
        <Link className="text-sm font-normal text-[#C8C6C6] hover:text-dreamgold flex items-center" href="/shopping-cart">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Carrito</span>
        </Link>
      </nav>
    </header>
  )
}
