import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'EstateStage AI', description: 'Virtual staging AI architecture-first per il mercato immobiliare' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="it"><body>{children}</body></html>; }
