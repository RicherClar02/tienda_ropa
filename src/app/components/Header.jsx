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

            <nav className="nav-center" style={{ display: 'flex', gap: '40px' }}>
                <Link href="/hombre" style={{ textDecoration: 'none', color: 'white' }}>
                    HOMBRE
                </Link>
                <Link href="/mujer" style={{ textDecoration: 'none', color: 'white' }}>
                    MUJER
                </Link>
                <Link href="/objects" style={{ textDecoration: 'none', color: 'white' }}>
                    OBJECTS
                </Link>
                {/* 1. CAMBIO DE JOURNAL A CARRITO */}
                <Link href="/carrito" style={{ textDecoration: 'none', color: 'white' }}> 
                    CARRITO
                </Link>
            </nav>

            <nav className="nav-right" style={{ display: 'flex', gap: '20px' }}>
                <Link href="/login" style={{ textDecoration: 'none', color: 'white' }}>
                    Login
                </Link>
                <Link href="/help" style={{ textDecoration: 'none', color: 'white' }}>
                    Help
                </Link>
                <Link href="/contactus" style={{ textDecoration: 'none', color: 'white' }}>
                    Contact us
                </Link>
            </nav>
            
        </header>
    );
};

export default Header;