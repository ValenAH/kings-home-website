import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header/header" 
import Link from "next/link" 
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hogar de Reyes - Tu descanso perfecto",
  description: "Descubre el colchón ideal para un sueño reparador",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-gray-100">
          <p className="text-xs text-gray-600">© 2024 Hogar de Reyes. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:text-dreamgold" href="#">
              Términos de servicio
            </Link>
            <Link className="text-xs hover:text-dreamgold" href="#">
              Política de privacidad
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  )
}
