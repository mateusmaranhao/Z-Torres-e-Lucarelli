import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, ExternalLink, Navigation } from 'lucide-react';
import ConsultationSection from '@/components/ConsultationSection';
import { OFFICE_INFO } from '@/lib/legal-data';

export const metadata = {
  title: 'Contato & Localização | Torres & Luccarelli Advogados Campinas',
  description: 'Entre em contato com o escritório Torres & Luccarelli Advogados Associados em Campinas. Endereço na Rua General Osório, 1212 - Centro. WhatsApp: (19) 98117-8266.',
};

export default function ContatoPage() {
  return (
    <div className="w-full font-sans bg-[#f7f9fb]">
      {/* Header Banner */}
      <section className="bg-[#131b2e] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#fedeb2] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#fedeb2] font-semibold">Contato & Localização</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#fedeb2] font-bold">
              Canais de Atendimento
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Fale com Torres & Luccarelli Advogados
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              Atendimento presencial em nossa sede no Centro de Campinas ou virtual por videoconferência com total sigilo e comodidade.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href={`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent("Olá! Gostaria de falar com um advogado.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <MessageCircle size={26} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
              WhatsApp Direto
            </span>
            <span className="text-lg font-bold text-gray-950 block mt-1">
              {OFFICE_INFO.whatsapp}
            </span>
            <span className="text-xs text-gray-500 mt-2 block">
              Plantão para dúvidas e agendamento de consultas urgentes.
            </span>
          </a>

          <a
            href={`tel:${OFFICE_INFO.phone.replace(/\D/g, '')}`}
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#131b2e]/5 text-[#131b2e] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Phone size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#725b38] block">
              Central Telefônica
            </span>
            <span className="text-lg font-bold text-gray-950 block mt-1">
              {OFFICE_INFO.phone}
            </span>
            <span className="text-xs text-gray-500 mt-2 block">
              Atendimento em horário comercial de segunda a sexta.
            </span>
          </a>

          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#131b2e]/5 text-[#131b2e] flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#725b38] block">
              Horário de Atendimento
            </span>
            <span className="text-lg font-bold text-gray-950 block mt-1">
              08:30 às 18:30
            </span>
            <span className="text-xs text-gray-500 mt-2 block">
              Segunda a sexta-feira, mediante agendamento prévio.
            </span>
          </div>
        </div>

        {/* Map + Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Embed Map & Address */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
                  Sede Física
                </span>
                <h2 className="text-2xl font-serif font-bold text-gray-950 mt-1">
                  Localização no Centro de Campinas
                </h2>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Prédio comercial moderno e estruturado, com facilidade de acesso a cartórios, varas da Justiça do Trabalho e Fórum Central de Campinas.
                </p>
              </div>

              {/* Real Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-100 shadow-inner">
                <iframe
                  src="https://maps.google.com/maps?q=Rua+General+Os%C3%B3rio%2C+1212+-+Centro%2C+Campinas+-+SP%2C+13010-111&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização de Torres & Luccarelli Advogados Associados em Campinas"
                  className="w-full h-80 sm:h-96"
                />
              </div>

              {/* Address Details & Route Buttons */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs text-gray-700">
                  <MapPin size={18} className="text-[#725b38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block text-sm">{OFFICE_INFO.address}</span>
                    <span className="text-gray-500">{OFFICE_INFO.city} • CEP {OFFICE_INFO.cep}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua General Osório, 1212 - Centro, Campinas - SP, 13010-111")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#131b2e] hover:bg-[#725b38] text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Traçar Rota no Google Maps</span>
                  </a>

                  <a
                    href={`https://waze.com/ul?q=${encodeURIComponent("Rua General Osório 1212 Campinas")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold transition-all border border-gray-200"
                  >
                    <Navigation size={14} />
                    <span>Abrir no Waze</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <ConsultationSection />
          </div>
        </div>
      </section>
    </div>
  );
}
