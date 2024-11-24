import '../app/globals.css';
import Image from 'next/image';
import logo from '../app/logo.png';
import {Inter} from 'next/font/google';
import { Navbar } from './components/general/navbar/Navbar';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Raúl Humberto Díaz Fernández',
  description: 'Poke Api'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
        <body className={inter.className}>
        <Navbar />
          <header className='flex justify-center items-center py-4'>
            <Image src={logo} alt="Logo de Poke Api" width={500} />
          </header>
          <main>{children}</main>
          <footer style={{ textAlign: 'center' }}></footer>
        </body>
    </html>  
  );
}
