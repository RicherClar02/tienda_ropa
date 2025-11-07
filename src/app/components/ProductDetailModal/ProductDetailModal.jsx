// src/app/components/ProductDetailModal/ProductDetailModal.jsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import './ProductDetailModal.css'

export default function ProductDetailModal({ product, onClose }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const productImages = product.imagenes || [product.imagen]

  return (
    <div className="product-detail-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        
        <div className="product-detail-container">
          <div className="product-image-section">
            <div className="detail-image-container">
              <Image 
                src={productImages[selectedImageIndex]} 
                alt={product.nombre}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="detail-product-image"
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg'
                }}
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="image-thumbnails">
                {productImages.map((imagen, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <Image 
                      src={imagen} 
                      alt={`${product.nombre} - vista ${index + 1}`}
                      fill
                      sizes="80px"
                      className="thumbnail-image"
                      onError={(e) => {
                        e.target.src = '/images/placeholder.jpg'
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="product-info-section">
            <h1 className="detail-product-name">{product.nombre}</h1>
            <p className="detail-product-description">{product.descripcion}</p>
            
            <div className="price-section">
              <span className="detail-product-price">${product.precio}</span>
              <div className="rating-section">
                <div className="stars">
                  {'★'.repeat(product.calificacion)}{'☆'.repeat(5 - product.calificacion)}
                </div>
                <span className="review-count">{product.reseñas} reseñas</span>
              </div>
            </div>
            
            {/* SE ELIMINÓ LA SECCIÓN DE COLORES AQUÍ */}
            
            <div className="action-buttons">
              <button className="buy-now-button">Comprar ahora</button>
              <button className="add-to-cart-button">Añadir al carrito</button>
            </div>
            
            <div className="shipping-info">
              <p>Despachado en {product.tiempoDespacho}</p>
              <p>{product.entrega}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}