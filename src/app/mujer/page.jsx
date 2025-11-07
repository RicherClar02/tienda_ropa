'use client'

import Link from 'next/link'
import Image from 'next/image'
import './mujer.css'

export default function MujerPage() { // Cambié HombrePage por MujerPage
  const categorias = [
    { 
      nombre: 'Camisas', 
      href: '/mujer/camisas', 
      imagen: '/images/productos/mujer/fondo camisas mujer.webp' 
    },
    { 
      nombre: 'Zapatos', 
      href: '/mujer/zapatos', 
      imagen: '/images/productos/mujer/fondo zapatos mujer.png' 
    },
    { 
      nombre: 'Vestidos', 
      href: '/mujer/vestidos', 
      imagen: '/images/productos/mujer/fondo vestidos mujer.jpeg' 
    },
    { 
      nombre: 'Accesorios', 
      href: '/mujer/accesorios', 
      imagen: '/images/productos/mujer/fondo accesorios mujer.jpeg' 
    }
  ]

  return (
    <div className="categoria-main">
      <h1 className="categoria-titulo">Apartado de Mujer</h1>
      <p className="categoria-descripcion">Descubre nuestra colección exclusiva para mujer</p>
      
      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <Link key={categoria.href} href={categoria.href} className="categoria-card">
            <div className="categoria-imagen-container">
              <Image
                src={categoria.imagen}
                alt={categoria.nombre}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="categoria-imagen"
                onError={(e) => {
                  // Fallback si la imagen no carga
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Placeholder que se muestra si la imagen falla */}
              <div className="imagen-placeholder">
                {categoria.nombre}
              </div>
            </div>
            <h3 className="categoria-nombre">{categoria.nombre}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}