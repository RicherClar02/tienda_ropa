// src/app/hombre/zapatos/page.jsx
import ProductGrid from '../../components/ProductGrid/ProductGrid'

export default function AccesoriosHombrePage() {
  const productos = [
    {
      id: 1,
      nombre: 'Billetera en Cuero para Hombre - "color Negro"',
      precio: 94.900,
      imagen: '/images/productos/hombre/accesorios/bille-1-principal.webp', 
      imagenes: [
        '/images/productos/hombre/accesorios/bille-1-principal.webp',
        '/images/productos/hombre/accesorios/bille-1-trasero.webp',
        '/images/productos/hombre/accesorios/bille-1-frontal.webp',
      ],
      descripcion: 'Organiza tus esenciales con elegancia y sofisticación con esta billetera de cuero, un accesorio imprescindible para el hombre moderno. Fabricada con cuero 100% genuino y un forro textil resistente, esta billetera te ofrece una durabilidad excepcional, un tacto suave y un diseño funcional. Su interior cuenta con múltiples compartimentos para tarjetas, billetes y documentos, permitiéndote mantener todo organizado y a mano. Su diseño clásico y atemporal se adapta a cualquier estilo, desde el más formal hasta el más casual. Llévala en el bolsillo de tu pantalón, en tu chaqueta o en tu bolso, y disfruta de la comodidad y la seguridad que te brinda este accesorio esencial. ',
      calificacion: 4.9,
      reseñas: 205,
      tiempoDespacho: '3 - 4 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 2,
      nombre: 'Correa Casual para Hombre - "color Negro"',
      precio: 89.900,
      imagen: '/images/productos/mujer/accesorios/acce-2-principal.avif', 
      imagenes: [
        '/images/productos/mujer/accesorios/acce-2-principal.avif',
        '/images/productos/mujer/accesorios/acce-2-trasero.avif',
      ],
      descripcion: 'Añade un toque de estilo y personalidad a tu look casual con esta correa confeccionada en 100% cuero. Su diseño versátil te permite combinarla con jeans, pantalones chinos o bermudas, adaptándose a diferentes estilos y ocasiones. El herraje en 100% zamac garantiza durabilidad y resistencia. Perfecta para el día a día, una salida con amigos o para un evento informal, esta correa te brindará comodidad y estilo. ¡Añade esta correa a tu colección y marca la diferencia con tu estilo!',
      calificacion: 5,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 3,
      nombre: 'Corbata Casual Jacquard para Hombre',
      precio: 64.900,
      imagen: '/images/productos/mujer/accesorios/collar-1-principal.png', 
      imagenes: [
        '/images/productos/mujer/accesorios/collar-1-principal.png',
        '/images/productos/mujer/accesorios/collar-1-frontal.png',
        '/images/productos/mujer/accesorios/collar-1-trasero.png',
      ],
      descripcion: 'Agrega un toque de personalidad y estilo a tus looks elegantes e informales. Con esta corbata de diseño contemporáneo, la pieza perfecta para el hombre que busca destacar con buen gusto. Su tejido jacquard de poliéster le confiere una textura interesante y un carácter único, ideal para mameluco con la formalidad de una corbata tradicional. ',
      calificacion: 4,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

  ]

  return <ProductGrid productos={productos} titulo="Accesorios para Hombre" />
}