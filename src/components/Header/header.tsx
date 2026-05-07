"use client"

import { useState } from "react"
import Link from "next/link"
import { BedDouble, ShoppingCart, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/products", label: "Productos" },
    { href: "https://wa.me/573196835927", label: "Contacto", target: "_blank" },
  ]

  return (
    <>
      <header className="px-8 md:px-12 lg:px-16 xl:px-20 h-16 flex items-center bg-transparent absolute top-0 left-0 right-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <BedDouble className="h-6 w-6 mr-2 text-white" />
          <span className="text-white font-[family-name:var(--font-abril-fatface)] text-xl">Hogar de Reyes</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 font-[family-name:var(--font-outfit)] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-sm font-normal text-[#C8C6C6] hover:text-dreamgold"
              href={link.href}
              target={link.target}
            >
              {link.label}
            </Link>
          ))}
          <Link className="text-sm font-normal text-[#C8C6C6] hover:text-dreamgold flex items-center" href="/shopping-cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Carrito</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="ml-auto flex items-center gap-4 md:hidden">
          <Link className="text-[#C8C6C6] hover:text-dreamgold" href="/shopping-cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Carrito</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white p-2"
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-72 bg-[#0a0a0a] shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-white font-[family-name:var(--font-abril-fatface)] text-lg">Menú</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="p-6 flex flex-col gap-6 font-[family-name:var(--font-outfit)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-lg text-[#C8C6C6] hover:text-[#CFA15C] uppercase tracking-wide transition-colors"
                  href={link.href}
                  target={link.target}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
