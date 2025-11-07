// src/app/hombre/zapatos/page.jsx
import ProductGrid from '../../components/ProductGrid/ProductGrid'

export default function VestidosMujerPage() {
  const productos = [
    {
      id: 1,
      nombre: 'Vestido largo de flores para el fin de semana',
      precio: 149.950,
      imagen: '/images/productos/mujer/vestidos/ves-1-principal.webp', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/vestidos/ves-1-principal.webp',
        '/images/productos/mujer/vestidos/ves-1-frontal.webp',
        '/images/productos/mujer/vestidos/ves-1-trasero.webp',
      ],
      descripcion: 'Vestido manga corta • Escote en V. • Largo. • Estampado de flores. • Elástico en cintura. • Abertura lateral en ruedo. • Perfecto para que luzcas femenina mientras estás cómoda. *Algunas pantallas pueden alterar el color real de la prenda. *La modelo usa un vestido talla S.',
      calificacion: 5,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 2,
      nombre: 'Vestido largo estampado en efecto lino',
      precio: 199.950,
      imagen: '/images/productos/mujer/vestidos/ves-2-principal.webp', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/vestidos/ves-2-principal.webp',
        '/images/productos/mujer/vestidos/ves-2-trasero.webp',
        '/images/productos/mujer/vestidos/ves-2-lateral.webp'
      ],
      descripcion: 'Vestido de tiras anudables con borlas • Escote tipo corazón. • Largo. • Estampados arabescos. • Corte en cintura. • Nido de abeja en posterior. • Tela efecto lino. • Tus días de verano estarán felices de contar con un vestido como este. *Algunas pantallas pueden alterar el color real de la prenda. *La modelo usa un vestido talla S.',
      calificacion: 4.2,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

  ]

  return <ProductGrid productos={productos} titulo="Vestidos para Mujer" />
}