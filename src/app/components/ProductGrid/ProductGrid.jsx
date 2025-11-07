// src/app/components/ProductGrid/ProductGrid.jsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import ProductDetailModal from '../ProductDetailModal/ProductDetailModal'
import './ProductGrid.css'

export default function ProductGrid({ productos, titulo }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openProductDetail = (producto) => {
    setSelectedProduct(producto)
  }

  const closeProductDetail = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="productos-page">
      <h1>{titulo}</h1>
      
      <div className="products-grid">
        {productos.map((producto) => (
          <div 
            key={producto.id} 
            className="product-card"
            onClick={() => openProductDetail(producto)}
          >
            <div className="image-container">
              <Image 
                src={producto.imagen} 
                alt={producto.nombre}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="product-image"
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg'
                }}
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{producto.nombre}</h3>
              <p className="product-price">${producto.precio}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          onClose={closeProductDetail}
        />
      )}
    </div>
  )
}