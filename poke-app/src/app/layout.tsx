// src/app/layout.tsx
import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <h1>Poke Api</h1>
        </header>
        <main>{children}</main>
        <footer style={{textAlign: "center"}}>Click here!</footer>
      </body>
    </html>
  );
}
