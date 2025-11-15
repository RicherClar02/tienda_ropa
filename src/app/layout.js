import Header from './components/Header';
// Importa el CartProvider si no lo has hecho ya

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Header para todas las páginas */}
        <Header /> 
        
        {/* Contenido dinámico de la página */}
        {children} 
      </body>
    </html>
  );
}