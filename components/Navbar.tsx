'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ChevronDown, 
  Menu, 
  X, 
  Briefcase, 
  HeartHandshake, 
  Scale, 
  Calendar,
  MessageCircle
} from 'lucide-react';
import { OFFICE_INFO } from '@/lib/legal-data';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 shadow-[0_1px_8px_rgba(0,0,0,0.06)] font-sans">
      {/* Top Banner Bar */}
      <div className="w-full bg-[#131b2e] text-[#7c839a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-9 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin size={14} className="text-[#fedeb2]" />
              {OFFICE_INFO.city}
            </span>
            <a 
              href={`tel:${OFFICE_INFO.phone.replace(/\D/g, '')}`}
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-[#fedeb2] transition-colors"
            >
              <Phone size={14} className="text-[#fedeb2]" />
              {OFFICE_INFO.phone}
            </a>
            <a 
              href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              {OFFICE_INFO.whatsapp}
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[11px] uppercase tracking-widest text-[#fedeb2] hidden sm:inline font-bold">
              Excelência Jurídica
            </span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <ShieldCheck size={14} className="text-[#fedeb2]" />
              {OFFICE_INFO.oab}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-[#131b2e] flex items-center justify-center text-[#fedeb2] font-bold text-base shadow-sm group-hover:bg-[#725b38] transition-colors">
              T&L
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gray-950 font-serif leading-tight group-hover:text-[#725b38] transition-colors">
                Torres & Luccarelli
              </span>
              <span className="text-[10px] uppercase text-[#725b38] tracking-widest font-semibold">
                Advogados Associados
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
            <Link
              href="/"
              className={`hover:text-[#725b38] transition-colors ${
                isActive('/') && pathname === '/' ? 'text-[#725b38] font-semibold' : ''
              }`}
            >
              Início
            </Link>

            {/* Áreas de Atuação Dropdown */}
            <div 
              className="relative py-6 group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/areas-de-atuacao"
                className={`flex items-center gap-1 hover:text-[#725b38] transition-colors ${
                  pathname.startsWith('/areas-de-atuacao') ? 'text-[#725b38] font-semibold' : ''
                }`}
              >
                <span>Áreas de Atuação</span>
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </Link>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-64 bg-white p-2.5 shadow-xl rounded-xl border border-gray-100 transition-all duration-200 ${
                  servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <Link
                  href="/areas-de-atuacao"
                  className="block px-3 py-2 text-xs font-bold text-[#725b38] uppercase tracking-wider hover:bg-gray-50 rounded-lg mb-1 border-b border-gray-100"
                >
                  Ver Todas as Especialidades →
                </Link>
                <Link
                  href="/areas-de-atuacao/direito-trabalhista"
                  className="flex items-center gap-2.5 px-3 py-2.5 text-xs text-gray-700 hover:bg-[#f8fafc] hover:text-[#131b2e] rounded-lg transition-colors"
                >
                  <Briefcase size={15} className="text-[#725b38]" />
                  <div>
                    <div className="font-semibold">Direito Trabalhista</div>
                    <div className="text-[11px] text-gray-400">Acidentes, CAT, Rescisão</div>
                  </div>
                </Link>
                <Link
                  href="/areas-de-atuacao/direito-de-familia"
                  className="flex items-center gap-2.5 px-3 py-2.5 text-xs text-gray-700 hover:bg-[#f8fafc] hover:text-[#131b2e] rounded-lg transition-colors"
                >
                  <HeartHandshake size={15} className="text-[#725b38]" />
                  <div>
                    <div className="font-semibold">Família & Sucessões</div>
                    <div className="text-[11px] text-gray-400">Divórcios, Guarda, Inventário</div>
                  </div>
                </Link>
                <Link
                  href="/areas-de-atuacao/direito-civel"
                  className="flex items-center gap-2.5 px-3 py-2.5 text-xs text-gray-700 hover:bg-[#f8fafc] hover:text-[#131b2e] rounded-lg transition-colors"
                >
                  <Scale size={15} className="text-[#725b38]" />
                  <div>
                    <div className="font-semibold">Direito Cível Estratégico</div>
                    <div className="text-[11px] text-gray-400">Consumidor, Danos, Contratos</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/sobre-o-escritorio"
              className={`hover:text-[#725b38] transition-colors ${
                isActive('/sobre-o-escritorio') ? 'text-[#725b38] font-semibold' : ''
              }`}
            >
              Sobre o Escritório
            </Link>

            <Link
              href="/advogados"
              className={`hover:text-[#725b38] transition-colors ${
                isActive('/advogados') ? 'text-[#725b38] font-semibold' : ''
              }`}
            >
              Advogados
            </Link>

            <Link
              href="/#depoimentos"
              className="hover:text-[#725b38] transition-colors"
            >
              Depoimentos
            </Link>

            <Link
              href="/#faq"
              className="hover:text-[#725b38] transition-colors"
            >
              FAQ
            </Link>

            <Link
              href="/contato"
              className={`hover:text-[#725b38] transition-colors ${
                isActive('/contato') ? 'text-[#725b38] font-semibold' : ''
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/agendar-consulta"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#725b38] text-white hover:bg-[#584323] transition-all text-xs font-semibold shadow-md hover:shadow-lg uppercase tracking-wider"
            >
              <Calendar size={14} />
              <span>Agendar Consulta</span>
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-2xl transition-all font-sans">
          <div className="flex flex-col space-y-4 text-sm font-medium text-gray-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100 flex items-center justify-between"
            >
              <span>Início</span>
              <span>→</span>
            </Link>

            <div className="py-2 border-b border-gray-100">
              <div className="font-semibold text-[#725b38] text-xs uppercase tracking-wider mb-2">
                Áreas de Atuação
              </div>
              <div className="pl-3 space-y-2 text-xs">
                <Link
                  href="/areas-de-atuacao"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-900 font-bold hover:text-[#725b38]"
                >
                  Página Geral de Serviços
                </Link>
                <Link
                  href="/areas-de-atuacao/direito-trabalhista"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-[#725b38]"
                >
                  • Direito Trabalhista
                </Link>
                <Link
                  href="/areas-de-atuacao/direito-de-familia"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-[#725b38]"
                >
                  • Família & Sucessões
                </Link>
                <Link
                  href="/areas-de-atuacao/direito-civel"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-600 hover:text-[#725b38]"
                >
                  • Direito Cível & Consumidor
                </Link>
              </div>
            </div>

            <Link
              href="/sobre-o-escritorio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              Sobre o Escritório
            </Link>

            <Link
              href="/advogados"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              Corpo Jurídico / Advogados
            </Link>

            <Link
              href="/#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              Depoimentos de Clientes
            </Link>

            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              Dúvidas Frequentes (FAQ)
            </Link>

            <Link
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100 font-semibold text-[#725b38]"
            >
              Contato & Localização
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/agendar-consulta"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-[#725b38] text-white font-semibold text-xs uppercase tracking-wider"
              >
                Agendar Consulta
              </Link>
              <a
                href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-lg bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp: (19) 98117-8266
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
