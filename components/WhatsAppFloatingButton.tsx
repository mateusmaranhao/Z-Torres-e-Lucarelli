'use client';

import { useState } from 'react';
import { MessageSquare, Send, X, ShieldCheck } from 'lucide-react';
import { OFFICE_INFO } from '@/lib/legal-data';

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: "Direito Trabalhista", text: "Olá! Gostaria de atendimento sobre Direitos Trabalhistas / Acidente de Trabalho." },
    { label: "Família & Divórcio", text: "Olá! Gostaria de consultar sobre Divórcio, Pensão ou Inventário." },
    { label: "Cível & Danos", text: "Olá! Gostaria de orientação sobre Cobrança Indevida / Acidente / Danos Cíveis." },
    { label: "Consulta Geral", text: "Olá! Gostaria de agendar uma consulta jurídica com o escritório Torres & Luccarelli." },
  ];

  const getWhatsAppUrl = (msg: string) => {
    return `https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div
      id="whatsapp-floating-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans"
    >
      {/* Popover Card */}
      {isOpen && (
        <div
          id="whatsapp-popover-card"
          className="mb-3 w-80 sm:w-96 rounded-2xl bg-white p-5 shadow-2xl border border-[#c5a880]/30 transition-all duration-300 transform origin-bottom-right"
          style={{ boxShadow: '0 12px 40px -8px rgba(19, 27, 46, 0.25)' }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#131b2e] flex items-center justify-center text-[#fedeb2] font-bold text-sm shadow">
                T&L
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                  Torres & Luccarelli
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Plantão no WhatsApp</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700 p-1 rounded-full transition-colors"
              aria-label="Fechar janela do WhatsApp"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body message */}
          <div className="py-3 text-xs text-gray-600 leading-relaxed bg-[#f8fafc] p-3 rounded-xl mt-3 border border-gray-100">
            <p className="font-medium text-gray-800 mb-1 flex items-center gap-1">
              <ShieldCheck size={14} className="text-[#725b38]" /> Atendimento Sigiloso & Imediato
            </p>
            Número oficial: <span className="font-bold text-gray-900">{OFFICE_INFO.whatsapp}</span>. Selecione o assunto abaixo para iniciar a conversa no WhatsApp:
          </div>

          {/* Quick choices */}
          <div className="mt-3 space-y-2">
            {quickMessages.map((item, index) => (
              <a
                key={index}
                href={getWhatsAppUrl(item.text)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-gray-50 hover:bg-[#131b2e] text-gray-800 hover:text-white transition-all text-xs font-medium group border border-gray-200 hover:border-[#131b2e]"
              >
                <span>{item.label}</span>
                <Send size={13} className="text-gray-400 group-hover:text-[#fedeb2] transition-colors" />
              </a>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[11px] text-gray-400">OAB/SP 48.912 • Campinas</span>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com um advogado especialista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-all shadow-sm"
            >
              Iniciar Chat
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <a
          id="whatsapp-floating-button"
          href={getWhatsAppUrl("Olá! Gostaria de falar com um advogado do escritório Torres & Luccarelli.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-medium text-sm animate-whatsapp-pulse group"
          title="Fale no WhatsApp (19) 98117-8266"
        >
          {/* WhatsApp Custom SVG Icon */}
          <svg
            className="w-7 h-7 fill-current shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          
          <div className="flex flex-col items-start pr-1">
            <span className="text-[11px] uppercase tracking-wider text-emerald-100 font-medium leading-none">
              WhatsApp Escritório
            </span>
            <span className="font-bold text-sm tracking-tight text-white">
              (19) 98117-8266
            </span>
          </div>
        </a>

        {/* Small toggle button to open the quick-options popover */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Opções rápidas de contato"
          className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#131b2e] text-[#fedeb2] flex items-center justify-center text-xs shadow-md border border-[#c5a880] hover:scale-110 transition-transform"
        >
          <MessageSquare size={12} />
        </button>
      </div>
    </div>
  );
}
