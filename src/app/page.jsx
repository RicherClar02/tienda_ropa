import Image from 'next/image'
import './Home.css'

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>New Essential Tees</h1>
        <p>Diseño minimalista con la mejor calidad</p>
        <button className="cta-button">Descubrir Colección</button>
      </section>
      
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Camiseta Essential</h3>
            <p>29,99 €</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Sudadera Minimal</h3>
            <p>59,99 €</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Pantalón Relaxed</h3>
            <p>49,99 €</p>
          </div>
        </div>
      </section>
    </main>
  )
}