export default function Foter() {
    return (
        <footer style={{
            backgroundColor: '#1c1917',
            color: '#a8a29e',
            padding: '40px 20px 30px 20px',
            marginTop: '60px',
            textAlign: 'center',
            borderTop: '1px solid #292524'
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#ffffff', 
                    marginBottom: '6px',
                    letterSpacing: '0.5px'
                }}>
                    Original From Nusantara
                </h2>
                <p style={{
                    fontSize: '14px',
                    color: '#d6d3d1',
                    marginTop: 0,
                    marginBottom: '20px',
                    fontWeight: '300'
                }}>
                    Kualitas Terbaik Biji Kopi Nusantara
                </p>
               

                <p style={{
                    fontSize: '12px',
                    color: '#78716c',
                    margin: 0
                }}>
                    &copy; {new Date().getFullYear()} Coffee Nusantara. All rights reserved.
                </p>
            </div>
        </footer>
    );
}