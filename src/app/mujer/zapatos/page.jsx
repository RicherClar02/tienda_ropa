// src/app/hombre/zapatos/page.jsx
import ProductGrid from '../../components/ProductGrid/ProductGrid'

export default function ZapatosMujerPage() {
  const productos = [
    {
      id: 1,
      nombre: 'Tenis adidas Grand Court Base 00s - "color Aguamarina"',
      precio: 329.950,
      imagen: '/images/productos/mujer/zapatos/zap-1-principal.avif', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/zapatos/zap-1-principal.avif',
        '/images/productos/mujer/zapatos/zap-1-lado.avif',
        '/images/productos/mujer/zapatos/zap-1-trasero.avif',
        '/images/productos/mujer/zapatos/zap-1-frontal.avif'
      ],
      descripcion: 'Zapatos formales negros para caballero, fabricados en cuero genuino.',
      calificacion: 5,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 2,
      nombre: 'Tenis adidas Grand Court Base 00s - "color Negro"',
      precio: 230.965,
      imagen: '/images/productos/mujer/zapatos/zap-2-principal.avif', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/zapatos/zap-2-principal.avif',
        '/images/productos/mujer/zapatos/zap-2-trasero.avif',
      ],
      descripcion: 'Zapatos formales negros para caballero, fabricados en cuero genuino.',
      calificacion: 4.2,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 3,
      nombre: 'Tenis adidas Grand Court Base 00s - "color Rojo"',
      precio: 329.950,
      imagen: '/images/productos/mujer/zapatos/zap-3-principal.avif', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/zapatos/zap-3-principal.avif',
        '/images/productos/mujer/zapatos/zap-3-lado.avif',
        '/images/productos/mujer/zapatos/zap-3-trasero.avif',
        '/images/productos/mujer/zapatos/zap-3-frontal.avif'
      ],
      descripcion: 'Zapatos formales negros para caballero, fabricados en cuero genuino.',
      calificacion: 4.3,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

  ]

  return <ProductGrid productos={productos} titulo="Zapatos para Mujer" />
}