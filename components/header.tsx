import Link from 'next/link';

export default function Header() {
    return (
        <header style={{
            backgroundColor: '#1c1917',
            color: 'white',
            padding: '20px 0',
            textAlign: 'center',
            width: '100%',
            boxSizing: 'border-box',
            marginBottom: '0'
        }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0px'
                }}>
                    
                    <img 
                        src="/logoV.png"
                        alt="Logo Coffee Nusantara"
                        style={{
                            width: '56px',
                            height: '56px',
                            objectFit: 'contain'
                        }}
                    />
                    
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
                        Coffee Nusantara
                    </h1>

                </div>
            </Link>
        </header>
    );
}