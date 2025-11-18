'use client'

import Link from 'next/link'
import Image from 'next/image'
import './Home.css'

export default function Home() {
  return (
    <main className="home-container">

      <section className="hero">

      

        <div className="hero-content">
          <h1 className="hero-title">Tienda Virtual</h1>
          <p className="hero-subtitle">Descubre nuevos productos y encuentra tu estilo</p>

          <div className="hero-buttons">
            <Link href="/hombre" className="hero-btn">Hombre</Link>
            <Link href="/mujer" className="hero-btn">Mujer</Link>
            <Link href="/carrito" className="hero-btn cart-btn">Carrito 🛒</Link>
          </div>
        </div>

      </section>

    </main>
  )
}
