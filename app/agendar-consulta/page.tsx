import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
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

            {/* Sede Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white p-3 space-y-3">
              <div className="flex items-center justify-between px-1">
                <div>
                  <span className="text-xs font-bold text-gray-950 block">Localização da Sede</span>
                  <span className="text-[11px] text-gray-500">Rua General Osório, 1212 - Centro, Campinas</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua General Osório, 1212 - Centro, Campinas - SP, 13010-111")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#725b38] hover:text-[#131b2e] transition-colors"
                >
                  <span>Abrir no Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-200 relative bg-gray-100">
                <iframe
                  src="https://maps.google.com/maps?q=Rua+General+Os%C3%B3rio%2C+1212+-+Centro%2C+Campinas+-+SP%2C+13010-111&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Escritório Torres & Luccarelli em Campinas"
                  className="w-full h-full"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1 px-1 text-gray-500">
                <span>Centro de Campinas • Fácil Acesso</span>
                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent("Rua General Osório 1212 Campinas")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#725b38] font-medium hover:underline text-[11px]"
                >
                  Navegar com Waze →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
