// src/app/hombre/layout.js - CORREGIDO
import './hombre.css'

export const metadata = {
  title: 'Ropa para Hombre - PGMONK',
  description: 'Descubre nuestra colección de ropa para hombre',
}

export default function HombreLayout({ children }) {
  return (
    <>
      {/* QUITAR Header aquí - ya está en el layout principal */}
      <main className="categoria-page">
        <div className="categoria-container">
          {children}
        </div>
      </main>
    </>
  )
}