import Link from "next/link"
import { BedDouble, ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-black">
      <Link className="flex items-center justify-center" href="/">
        <BedDouble className="h-6 w-6 mr-2 text-blue-300" />
        <span className="font-bold text-blue-300">HOGAR DE REYES</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium text-blue-300 hover:text-dreamgold" href="/">
          Inicio
        </Link>
        <Link className="text-sm font-medium text-blue-300 hover:text-dreamgold" href="/customize">
          Personalizar
        </Link>
        <Link className="text-sm font-medium text-blue-300 hover:text-dreamgold" href="/allies">
          Aliados
        </Link>
        <Link className="text-sm font-medium text-blue-300 hover:text-dreamgold" href="/#contact">
          Contacto
        </Link>
        <Link className="text-sm font-medium text-blue-300 hover:text-dreamgold flex items-center" href="/shopping-cart">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Carrito</span>
        </Link>
      </nav>
    </header>
  )
}

