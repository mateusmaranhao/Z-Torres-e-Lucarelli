import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ConsultationSection from '@/components/ConsultationSection';
import { OFFICE_INFO } from '@/lib/legal-data';

export const metadata = {
  title: 'Agendar Consulta | Torres & Luccarelli Advogados Campinas',
  description: 'Agende uma consulta jurídica presencial em Campinas ou por videoconferência. Contato direto via WhatsApp: (19) 98117-8266.',
};

export default function AgendarConsultaPage() {
  return (
    <div className="w-full font-sans bg-[#f7f9fb]">
      {/* Header Banner */}
      <section className="bg-[#131b2e] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#fedeb2] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#fedeb2] font-semibold">Agendar Consulta</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#fedeb2] font-bold">
              Atendimento Jurídico Reservado
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Agende sua Consulta com Nossos Advogados
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              Atendimento presencial em Campinas ou online por videoconferência com total sigilo profissional e agilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ConsultationSection />
          </div>

          {/* Right Column: Office info & channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
              <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
                Canais Imediatos
              </span>
              <h3 className="font-serif font-bold text-gray-950 text-xl mt-1 mb-6">
                Fale Diretamente com o Escritório
              </h3>

              <div className="space-y-5">
                <a
                  href={`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta jurídica.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 text-emerald-900 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-700 block">
                      WhatsApp Plantão
                    </span>
                    <span className="text-base font-bold text-gray-900">
                      {OFFICE_INFO.whatsapp}
                    </span>
                    <span className="text-xs text-gray-500 block mt-0.5">
                      Resposta rápida em horário comercial
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${OFFICE_INFO.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#131b2e] text-[#fedeb2] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-gray-500 block">
                      Central Telefônica Campinas
                    </span>
                    <span className="text-base font-bold text-gray-900">
                      {OFFICE_INFO.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="w-11 h-11 rounded-lg bg-[#131b2e] text-[#fedeb2] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-gray-500 block">
                      Endereço da Sede
                    </span>
                    <span className="text-sm font-semibold text-gray-900 block mt-0.5">
                      {OFFICE_INFO.address}
                    </span>
                    <span className="text-xs text-gray-500 block">
                      {OFFICE_INFO.city} • CEP {OFFICE_INFO.cep}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="w-11 h-11 rounded-lg bg-[#131b2e] text-[#fedeb2] flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-gray-500 block">
                      Horário de Funcionamento
                    </span>
                    <span className="text-xs font-semibold text-gray-900 block mt-0.5">
                      {OFFICE_INFO.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sede Map Card */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white p-2">
              <div
                className="w-full h-56 rounded-xl bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCd0YLHa9LAmRDBO1JiH86XkvgSl8e9u3qZGpbQA-mU3yycEj3BO538Nqv6mAyvjGgiYGn2_2NHJzeLwimLCnqLK2o-pPtT4r_GnYF3oYNQsxdmd-UjhBKprQyWZzaEG4aXUA-pTquDhPC69-HEuC_zi5evmkBWWOzfBua3a4apSmws-0dV_0J0uBybmU-WTifiNC9CCLF9nHsQtFLeCpaHELEiflWAyT2ZSyCFc_3lQyLYKqH2PD066g')`,
                }}
              >
                <div className="absolute inset-0 bg-[#131b2e]/30 flex items-end p-4">
                  <span className="bg-white/95 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-900 shadow">
                    Rua General Osório, 1212 - Centro, Campinas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
