import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: '#f7fafc', 
        fontFamily: 'sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />

        <div style={{ flex: 1 }}>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}