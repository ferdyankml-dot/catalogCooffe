import Link from 'next/link';
import { Kopi } from '../data/dataKopi';

export default function CoffeeCard({ kopi }: { kopi: Kopi }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      
      <img
        src={kopi.gambar}
        alt={kopi.nama}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />

      <div style={{ padding: '16px' }}>
        <span style={{
          backgroundColor: kopi.tipe === 'Arabica' ? '#fef3c7' : '#dbeafe',
          color: kopi.tipe === 'Arabica' ? '#92400e' : '#1e40af',
          padding: '4px 8px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {kopi.tipe}
        </span>

        <h3 style={{ margin: '12px 0 4px 0', fontSize: '18px', color: '#1a202c' }}>
          {kopi.nama}
        </h3>
        <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#718096' }}>
          Asal: {kopi.asal}
        </p>

        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {kopi.profilRasa.map((rasa, index) => (
            <span key={index} style={{ fontSize: '12px', backgroundColor: '#edf2f7', padding: '2px 6px', borderRadius: '4px', color: '#4a5568' }}>
              #{rasa}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#2d3748' }}>
            Rp {kopi.harga.toLocaleString('id-ID')}
          </span>
          <Link href={`/kopi/${kopi.id}`}>
            <button style={{
              backgroundColor: '#4a3b32',
              color: 'white',
              border: 'none',
              padding: '6px 16px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}