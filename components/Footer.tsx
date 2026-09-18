import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, MessageCircle, Shield } from 'lucide-react';
import { OFFICE_INFO } from '@/lib/legal-data';

export default function Footer() {
  return (
    <footer className="w-full bg-[#131b2e] text-[#7c839a] border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Credibility */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#725b38] flex items-center justify-center text-white font-bold font-serif text-sm">
                T&L
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Torres & Luccarelli
              </span>
            </div>
            
            <p className="text-xs leading-relaxed text-gray-300">
              Assessoria jurídica de alto padrão com soluções sob medida para empresas e famílias em Campinas e em todo o território nacional. Discrição, integridade e excelência técnica inegociáveis.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="font-bold text-[#fedeb2] tracking-wider uppercase text-[11px]">
                {OFFICE_INFO.oab}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">Registro Institucional</span>
            </div>
          </div>

          {/* Column 2: Áreas de Atuação links */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-base font-semibold text-white tracking-wide mb-1">
              Áreas de Atuação
            </span>
            <Link
              href="/areas-de-atuacao/direito-trabalhista"
              className="text-xs text-gray-300 hover:text-[#fedeb2] transition-colors"
            >
              Direito Trabalhista & Acidentes
            </Link>
            <Link
              href="/areas-de-atuacao/direito-de-familia"
              className="text-xs text-gray-300 hover:text-[#fedeb2] transition-colors"
            >
              Família, Divórcios & Sucessões
            </Link>
            <Link
              href="/areas-de-atuacao/direito-civel"
              className="text-xs text-gray-300 hover:text-[#fedeb2] transition-colors"
            >
              Direito Cível, Consumidor & Danos
            </Link>
            <Link
              href="/areas-de-atuacao"
              className="text-xs text-gray-300 hover:text-[#fedeb2] transition-colors"
            >
              Direito Imobiliário & Patrimonial
            </Link>
            <Link
              href="/areas-de-atuacao"
              className="text-xs text-gray-300 hover:text-[#fedeb2] transition-colors"
            >
              Ver Todas as Áreas (Página Geral) →
            </Link>
          </div>

          {/* Column 3: Sede Campinas */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-base font-semibold text-white tracking-wide mb-1">
              Sede Campinas
            </span>
            <div className="flex items-start gap-2.5 text-xs text-gray-300">
              <MapPin size={18} className="text-[#fedeb2] shrink-0 mt-0.5" />
              <span>
                {OFFICE_INFO.address}<br />
                {OFFICE_INFO.city}<br />
                CEP {OFFICE_INFO.cep}
              </span>
            </div>

            <Link
              href="/contato"
              className="text-xs text-[#fedeb2] hover:underline flex items-center gap-1 font-medium"
            >
              <span>Ver Mapa Interativo & Traçar Rota →</span>
            </Link>

            <div className="flex items-center gap-2.5 text-xs text-gray-300 pt-1">
              <Clock size={16} className="text-[#fedeb2] shrink-0" />
              <span>{OFFICE_INFO.hours}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-gray-400 pt-1">
              <Shield size={16} className="text-[#fedeb2] shrink-0" />
              <span>Atendimento com Hora Marcada</span>
            </div>
          </div>

          {/* Column 4: Canais Diretos */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-base font-semibold text-white tracking-wide mb-1">
              Canais Diretos
            </span>
            <a
              href={`tel:${OFFICE_INFO.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-white transition-colors"
            >
              <Phone size={15} className="text-[#fedeb2] shrink-0" />
              <span>{OFFICE_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle size={15} className="text-emerald-400 shrink-0" />
              <span>{OFFICE_INFO.whatsapp} (WhatsApp)</span>
            </a>

            <a
              href={`mailto:${OFFICE_INFO.email}`}
              className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={15} className="text-[#fedeb2] shrink-0" />
              <span>{OFFICE_INFO.email}</span>
            </a>

            <div className="pt-3">
              <Link
                href="/agendar-consulta"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#725b38] text-white hover:bg-[#8b6f44] transition-all text-xs font-semibold uppercase tracking-wider shadow"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2025-2026 Torres & Luccarelli Advogados Associados. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/sobre-o-escritorio" className="hover:text-[#fedeb2] transition-colors">
              Institucional
            </Link>
            <span className="hover:text-[#fedeb2] transition-colors cursor-pointer">
              Código de Ética OAB
            </span>
            <span className="hover:text-[#fedeb2] transition-colors cursor-pointer">
              Privacidade & Sigilo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
