import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ACCREf - U.S. GAAP Financial Accounting Reference',
  description: 'Comprehensive searchable reference for U.S. GAAP accounting, journal entries, financial statements, and ratios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
