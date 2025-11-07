'use client'

import Link from 'next/link'
import Image from 'next/image'
import './hombre.css'

export default function HombrePage() { // Cambié HombrePage por MujerPage
  const categorias = [
    { 
      nombre: 'Camisas', 
      href: '/hombre/camisas', 
      imagen: '/images/productos/hombre/fondo camisa.png!sw800' 
    },
    { 
      nombre: 'Zapatos', 
      href: '/hombre/zapatos', 
      imagen: '/images/productos/hombre/fondo zapatos.avif' 
    },
    { 
      nombre: 'Pantalones', 
      href: '/hombre/pantalones', 
      imagen: '/images/productos/hombre/fondo pantalon.avif' 
    },
    { 
      nombre: 'Accesorios', 
      href: '/hombre/accesorios', 
      imagen: '/images/productos/hombre/fondo accesorios.png' 
    }
  ]

  return (
    <div className="categoria-main">
      <h1 className="categoria-titulo">Apartado de Hombre</h1>
      <p className="categoria-descripcion">Descubre nuestra colección exclusiva para hombre</p>
      
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