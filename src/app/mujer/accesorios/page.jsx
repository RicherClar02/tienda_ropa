// src/app/hombre/zapatos/page.jsx
import ProductGrid from '../../components/ProductGrid/ProductGrid'

export default function AccesoriosMujerPage() {
  const productos = [
    {
      id: 1,
      nombre: 'Gorra Béisbol 3 Rayas New Logo - "color Rosado"',
      precio: 79.950,
      imagen: '/images/productos/mujer/accesorios/acce-1-principal.avif', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/accesorios/acce-1-principal.avif',
        '/images/productos/mujer/accesorios/acce-1-trasero.avif',
      ],
      descripcion: 'Una gorra deportiva con las 3 Rayas hecha parcialmente con una mezcla de materiales reciclados y renovables, No importa si vas al gimnasio o simplemente a pasar el día fuera, esta gorra adidas le pone el toque final a tu look.',
      calificacion: 5,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 2,
      nombre: 'Gorra Béisbol 3 Rayas New Logo - "color Negro"',
      precio: 79.950,
      imagen: '/images/productos/mujer/accesorios/acce-2-principal.avif', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/accesorios/acce-2-principal.avif',
        '/images/productos/mujer/accesorios/acce-2-trasero.avif',
      ],
      descripcion: 'Una gorra deportiva con las 3 Rayas hecha parcialmente con una mezcla de materiales reciclados y renovables, No importa si vas al gimnasio o simplemente a pasar el día fuera, esta gorra adidas le pone el toque final a tu look.',
      calificacion: 5,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

        {
      id: 3,
      nombre: 'Collar Collier Círculo de Pavé con Logotipo Pandora"',
      precio: 449.900,
      imagen: '/images/productos/mujer/accesorios/collar-1-principal.png', // Imagen por defecto
      imagenes: [
        '/images/productos/mujer/accesorios/collar-1-principal.png',
        '/images/productos/mujer/accesorios/collar-1-frontal.png',
        '/images/productos/mujer/accesorios/collar-1-trasero.png',
      ],
      descripcion: 'Los círculos son un símbolo del infinito ya que no tienen principio ni fin. El círculo liso, engastado con piedra, de nuestro pendiente para collar crea un impacto elegante de un "para siempre" que rinde tributo a nuestro legado de fabricación de joyería. Detallado con el logotipo de Pandora y corazones calados, el estilo reversible es una adición atemporal a cualquier joyero. También es un regalo adecuado para alguien que ame los clásicos.',
      calificacion: 4,
      reseñas: 189,
      tiempoDespacho: '3 - 5 semanas',
      entrega: 'Entrega a domicilio - $10'
    },

  ]

  return <ProductGrid productos={productos} titulo="Accesorios para Mujer" />
}