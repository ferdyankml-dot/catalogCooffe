import { daftarKopi } from '../data/dataKopi';
import CoffeeCard from '../components/CoffeeCard';

export default function HomePage() {
  const textStyle = {
    fontSize: '16px',
    color: '#4a5568',
    lineHeight: '1.8',
    margin: 0,
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '16px',
    marginTop: 0,
  };

  const flexRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    marginBottom: '60px',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '450px',
    height: '300px',
    objectFit: 'cover' as const,
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  return (
    <div>
      <section style={{ width: '100%', margin: 0, padding: 0, overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '400px', 
            objectFit: 'cover',
            display: 'block'
          }}
        >
          <source src="/kopi-banner.mp4" type="video/mp4" />
          Browser Anda tidak mendukung pemutar video.
        </video>
      </section>
      
      <main style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <section style={{ marginBottom: '80px' }}>
          <div style={flexRowStyle}>
            <div style={{ flex: 1 }}>
              <img 
                src="/gelasKopi.jpg" 
                alt="Suasana cafe Coffee Nusantara"
                style={imageStyle}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={headingStyle}>Menghubungkan Anda dengan Rasa Otentik Indonesia</h2>
              <p style={textStyle}>
                Selamat datang di Coffee Nusantara, rumah bagi para pencinta kopi sejati. Web ini didirikan dengan misi sederhana: memperkenalkan kekayaan cita rasa kopi single-origin dari berbagai pelosok Indonesia langsung ke meja Anda.
              </p>
            </div>
          </div>

          <div style={{...flexRowStyle, flexDirection: 'row-reverse'}}>
            <div style={{ flex: 1 }}>
              <img 
                src="/petaniKopi.jpg" 
                alt="Biji kopi pilihan kualitas premium"
                style={imageStyle}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={headingStyle}>Kualitas Tanpa Kompromi, Dari Petani ke Cangkir</h2>
              <p style={textStyle}>
                Kami sangat serius menjaga kualitas. Tim kami bekerja sama langsung dengan petani lokal yang berdedikasi di Gayo, Toraja, Kintamani, hingga Flores.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 style={{...headingStyle, fontSize: '24px', marginBottom: '24px'}}>Jelajahi Koleksi Kopi Kami</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {daftarKopi.map((kopi) => (
              <CoffeeCard key={kopi.id} kopi={kopi} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}