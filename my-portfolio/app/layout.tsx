// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Portfolio',
  description: 'A dark-themed portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <nav>
            <Link href="/" className="mx-2">
              Home
            </Link>
            <Link href="/about" className="mx-2">
              About
            </Link>
            <Link href="/projects" className="mx-2">
              Projects
            </Link>
            <Link href="/contact" className="mx-2">
              Contact
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="p-4 text-center">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
