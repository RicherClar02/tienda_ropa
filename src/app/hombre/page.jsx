import Link from 'next/link'
import './hombre.css'

export default function HombrePage() {
  const categorias = [
    { nombre: 'Camisas', href: '/hombre/camisas', imagen: '/images/hombre-camisas.jpg' },
    { nombre: 'Zapatos', href: '/hombre/zapatos', imagen: '/images/hombre-zapatos.jpg' },
    { nombre: 'Pantalones', href: '/hombre/pantalones', imagen: '/images/hombre-pantalones.jpg' },
    { nombre: 'Accesorios', href: '/hombre/accesorios', imagen: '/images/hombre-accesorios.jpg' }
  ]


  return (
    <div className="categoria-main">
      <h1 className="categoria-titulo">Ropa para Hombre</h1>
      <p className="categoria-descripcion">Descubre nuestra colección exclusiva para hombre</p>
      
      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <Link key={categoria.href} href={categoria.href} className="categoria-card">
            <div className="categoria-imagen">
              {/* Imagen temporal */}
              <div className="imagen-placeholder">{categoria.nombre}</div>
            </div>
            <h3 className="categoria-nombre">{categoria.nombre}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}