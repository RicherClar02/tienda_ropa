// src/app/hombre/zapatos/page.jsx
import ProductGrid from '../../components/ProductGrid/ProductGrid'

export default function CamisasHombrePage() {
  const productos = [
    {
      id: 1,
      nombre: 'Camisa con Textura para Hombre',
      precio: 210.000,
      imagen: '/images/productos/hombre/accesorios/bille-1-principal.webp', 
      imagenes: [
        '/images/productos/hombre/accesorios/bille-1-principal.webp',
        '/images/productos/hombre/accesorios/bille-1-trasero.webp',
        '/images/productos/hombre/accesorios/bille-1-frontal.webp',
      ],
      descripcion: 'Luce un estilo fresco y relajado con esta camisa de manga corta, la prenda ideal para los días más cálidos. Confeccionada en tejido plano 100% algodón con una clase de textura, te garantiza una comodidad y frescura excepcionales, a la vez que añade un interés visual que la distingue de las camisas lisas. ',
      calificacion: 4.9,
      reseñas: 205,
      tiempoDespacho: '3 - 4 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 2,
      nombre: 'Camisa azul manga corta de corte regular',
      precio: 529.900,
      imagen: '/images/productos/mujer/accesorios/acce-2-principal.avif', 
      imagenes: [
        '/images/productos/mujer/accesorios/acce-2-principal.avif',
        '/images/productos/mujer/accesorios/acce-2-trasero.avif',
      ],
      descripcion: 'Camisa de lino de manga corta con teñido en pigmento que aporta un estilo fresco, auténtico y ligeramente desgastado. Perfecta para los días de calor, ofrece transpirabilidad y un look casual elegante, ideal tanto para el día como para salidas nocturnas relajadas.',
      calificacion: 5,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 3,
      nombre: 'Camisa de Verano a Cuadros Clásica',
      precio: 269.940,
      imagen: '/images/productos/mujer/accesorios/collar-1-principal.png', 
      imagenes: [
        '/images/productos/mujer/accesorios/collar-1-principal.png',
        '/images/productos/mujer/accesorios/collar-1-frontal.png',
        '/images/productos/mujer/accesorios/collar-1-trasero.png',
      ],
      descripcion: 'Camisa de manga corta para hombre de Tommy Hilfiger con un estampado de cuadros. Presenta cuello abotonado, cierre frontal con botones y un pequeño logo bordado de la marca en el pecho. Confeccionada en suave algodón para mayor comodidad.',
      calificacion: 4,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

  ]

  return <ProductGrid productos={productos} titulo="Camisas para Hombre" />
}