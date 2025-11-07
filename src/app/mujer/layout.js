// src/app/hombre/layout.js - CORREGIDO
import './mujer.css'

export const metadata = {
  title: 'Ropa para Mujer - PGMONK',
  description: 'Descubre nuestra colección de ropa para mujer',
}

export default function MujerLayout({ children }) {
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