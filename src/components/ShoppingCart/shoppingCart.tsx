"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface ProductoCarrito {
  id: string
  nombre: string
  tamano: string
  firmeza: number
  material: string
  precio: number
  cantidad: number
}

export function ShoppingCart() {
  const [productos, setProductos] = useState<ProductoCarrito[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // En una aplicación real, aquí cargaríamos los productos del carrito desde el almacenamiento local o una API
    const productosEjemplo: ProductoCarrito[] = [
      {
        id: "1",
        nombre: "Colchón Personalizado",
        tamano: "matrimonial",
        firmeza: 70,
        material: "memory_foam",
        precio: 1299.99,
        cantidad: 1,
      },
      {
        id: "2",
        nombre: "Almohada DreamSleep",
        tamano: "estándar",
        firmeza: 50,
        material: "latex",
        precio: 89.99,
        cantidad: 2,
      },
    ]
    setProductos(productosEjemplo)
  }, [])

  useEffect(() => {
    const nuevoTotal = productos.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0)
    setTotal(nuevoTotal)
  }, [productos])

  const actualizarCantidad = (id: string, nuevaCantidad: number) => {
    setProductos(
      productos.map((producto) =>
        producto.id === id ? { ...producto, cantidad: Math.max(0, nuevaCantidad) } : producto,
      ),
    )
  }

  const eliminarProducto = (id: string) => {
    setProductos(productos.filter((producto) => producto.id !== id))
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold text-dreamgold mb-6">Tu Carrito</h2>
      {productos.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {productos.map((producto) => (
              <div key={producto.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                  <p className="text-sm text-gray-600">
                    Tamaño: {producto.tamano}, Firmeza: {producto.firmeza}%, Material:{" "}
                    {producto.material === "memory_foam"
                      ? "Memory Foam"
                      : producto.material === "latex"
                        ? "Látex"
                        : producto.material === "innerspring"
                          ? "Resortes"
                          : "Híbrido"}
                  </p>
                  <p className="text-dreamblue font-semibold">${producto.precio.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{producto.cantidad}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="ml-4 text-red-500 hover:text-red-700" onClick={() => eliminarProducto(producto.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="bg-dreamblue text-white py-2 px-4 rounded hover:bg-dreamblue/90 transition-colors">
              Proceder al pago
            </button>
          </div>
        </>
      )}
      <Link href="/personalizar" className="block mt-6 text-center text-dreamblue hover:underline">
        Continuar comprando
      </Link>
    </div>
  )
}

