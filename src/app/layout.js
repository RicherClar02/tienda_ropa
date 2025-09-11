import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'PGMONK Style Store',
  description: 'Tienda de ropa con estilo minimalista',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}