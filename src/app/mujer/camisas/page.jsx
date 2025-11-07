// src/app/hombre/zapatos/page.jsx
import ProductGrid from '../../components/ProductGrid/ProductGrid'

export default function CamisasMujerPage() {
  const productos = [
    {
      id: 1,
      nombre: 'Blusa Mujer con Bordado Manga larga globo University Club - "Color Negro"',
      precio: 58.990,
      imagen: '/images/productos/mujer/camisa/blu-1-principal.webp', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/camisa/blu-1-principal.webp',
        '/images/productos/mujer/camisa/blu-1-lateral.webp',
        '/images/productos/mujer/camisa/blu-1-trasero.webp',
      ],
      descripcion: 'Diseño: Bordado ,Segmento: Adulto ,Tipo de cuello: Cuello en v',
      calificacion: 5,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 2,
      nombre: 'Camiseta Mujer Tejido Manga corta de Algodón University Club - "Color Cafe"',
      precio: 230.965,
      imagen: '/images/productos/mujer/camisa/cam-1-principal.webp', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/camisa/cam-1-principal.webp',
        '/images/productos/mujer/camisa/cam-1-frontal.webp',
        '/images/productos/mujer/camisa/cam-1-trasero.webp'
      ],
      descripcion: 'Material de vestuario: Algodón, Composición: 100%ALGODON, Estilo de vestuario: Casual, Largo de mangas: Manga corta',
      calificacion: 4.2,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

  ]

  return <ProductGrid productos={productos} titulo="Camisas y Blusas para Mujer" />
}