import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Torres & Luccarelli Advogados Associados | Campinas - SP',
  description: 'Defesa Estratégica e Soluções Jurídicas em Direito Trabalhista, Família e Cível. Atuação de excelência na comarca de Campinas e em todo o Estado de São Paulo. OAB/SP 48.912.',
  keywords: [
    'advogado em campinas',
    'advocacia campinas',
    'direito trabalhista campinas',
    'direito de familia campinas',
    'direito civel campinas',
    'torres e luccarelli advogados',
    'oab campinas',
    'divorcio cartorio campinas',
    'acidente de trabalho campinas',
  ],
  openGraph: {
    title: 'Torres & Luccarelli Advogados Associados | Campinas - SP',
    description: 'Defesa Estratégica e Soluções Jurídicas em Direito Trabalhista, Família e Cível. Atuação com rigor técnico e atendimento humanizado. OAB/SP 48.912.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torres & Luccarelli Advogados Associados',
    description: 'Assessoria jurídica de excelência em Campinas e Região. OAB/SP 48.912.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-[#f7f9fb] text-[#191c1e] antialiased min-h-screen flex flex-col font-sans selection:bg-[#c5a880]/30 selection:text-[#131b2e]">
        <Navbar />
        <main className="flex-1 w-full pt-[116px]">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
