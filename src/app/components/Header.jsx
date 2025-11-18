// src/app/components/Header.jsx

import Link from 'next/link';

const Header = () => {
    // Nota: He renombrado 'Contact us' a 'Contacto' y añadido 'Carrito'
    return (
        <header className="main-header" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '20px 40px', 
            backgroundColor: '#303f50', // Color de fondo similar al de tu imagen
            color: 'white' 
        }}>
            
            <div className="logo" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
                    PGMONK
                </Link>
            </div>

              
        </header>
    );
};

export default Header;