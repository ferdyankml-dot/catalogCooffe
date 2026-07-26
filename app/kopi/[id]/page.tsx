import { daftarKopi } from '@/data/dataKopi'; 
import Link from 'next/link';

interface DetailProps {
    params: Promise<{ id: string }>;
}

export default async function DetailKopiPage({ params }: DetailProps) {
    const { id } = await params;

    const kopi = daftarKopi.find((item) => item.id === id);

    if (!kopi) {
        return (
            <main style={{ padding: '60px 20px', textAlign: 'center' }}>
                <h2>⚠️ Kopi tidak ditemukan</h2>
                <p>Produk kopi yang Anda cari tidak ada dalam katalog kami.</p>
                <Link href="/" style={{ color: '#f59e0b', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Kembali ke Katalog
                </Link>
            </main>
        );
    }

    return (
        <main style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
                <div>
                    <img
                        src={kopi.gambar}
                        alt={kopi.nama}
                        style={{
                            width: '100%',
                            height: '420px',
                            objectFit: 'cover',
                            borderRadius: '12px'
                        }}
                    />
                </div>

                <div>
                    <span style={{
                        backgroundColor: '#fef3c7',
                        color: '#92400e',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                    }}>
                        {kopi.tipe}
                    </span>

                    <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1a202c', marginTop: '12px', marginBottom: '6px' }}>
                        {kopi.nama}
                    </h1>

                    <p style={{ color: '#718096', fontSize: '15px', marginTop: 0, marginBottom: '20px' }}>
                        📍 Asal: <strong>{kopi.asal}</strong>
                    </p>

                    <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2d241e', marginBottom: '20px' }}>
                        Rp {kopi.harga.toLocaleString('id-ID')}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '13px', color: '#718096', display: 'block', marginBottom: '8px' }}>
                            Profil Rasa:
                        </span>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {kopi.profilRasa.map((rasa, index) => (
                                <span key={index} style={{ backgroundColor: '#edf2f7', color: '#2d3748', padding: '6px 12px', borderRadius: '6px', fontSize: '13px' }}>
                                    #{rasa}
                                </span>
                            ))}
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #edf2f7', margin: '20px 0' }} />

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '16px', color: '#2d3748', marginBottom: '8px' }}>Deskripsi Produk:</h3>
                        <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '15px', margin: 0 }}>
                            {kopi.deskripsi}
                        </p>
                    </div>


                    <Link href="/" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                        <button style={{
                            width: '100%',
                            padding: '14px',
                            backgroundColor: '#2d241e',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
                        }}>
                            Cek Produk Lain
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}