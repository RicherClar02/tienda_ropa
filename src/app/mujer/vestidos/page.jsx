'use client'
import Image from 'next/image'
import './vestidos-m.css'

export default function VestidosPage() {
  const productos = [
    {
      id: 1,
      nombre: 'Vestido de verano floral',
      precio: 49.99,
      imagen: '/images/productos/hombre/vestido-1-mujer.jpeg' // Puede ser cualquier tamaño
    },

  ]

  return (
    <div className="vestidos-page">
      <h1>Vestidos para Dama</h1>
      
      <div className="products-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="product-card">
            <div className="image-container">
              <Image 
                src={producto.imagen} 
                alt={producto.nombre}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="product-image"
                onError={(e) => {
                  // Fallback si la imagen no carga
                  e.target.src = '/images/placeholder.jpg'
                }}
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{producto.nombre}</h3>
              <p className="product-price">${producto.precio}</p>
              <button className="add-to-cart-btn">
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}