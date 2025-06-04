import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Soham Sarpotdar Portfolio',
  description: 'Enterprise grade UI portfolio site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <header className="p-6 bg-gray-900 flex justify-between items-center shadow-md">
          <h1 className="text-2xl font-bold">Soham Sarpotdar</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="p-4 text-center bg-gray-900">© {new Date().getFullYear()} Soham Sarpotdar</footer>
      </body>
    </html>
  );
}
