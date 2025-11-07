import Link from 'next/link'
import './ProductGrid.css'

export default function ProductGrid({ productos }) {
  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <div key={producto.id} className="product-card">
          <Link href={`/producto/${producto.id}`}>
            <div className="product-image">
              <div className="image-placeholder">{producto.nombre}</div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{producto.nombre}</h3>
              <p className="product-price">${producto.precio}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}