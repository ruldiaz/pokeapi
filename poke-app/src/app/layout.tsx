// src/app/layout.tsx
import '../app/globals.css';
import Image from 'next/image';
import logo from '../app/logo.png';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header style={{textAlign:"center"}}>
          <Image src={logo} alt="Logo de Poke Api" width={500} />
        </header>
        <main>{children}</main>
        <footer style={{ textAlign: 'center' }}></footer>
      </body>
    </html>
  );
}
