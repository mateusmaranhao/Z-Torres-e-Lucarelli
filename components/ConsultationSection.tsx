'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Send, CheckCircle2, ShieldAlert, Video } from 'lucide-react';
import { OFFICE_INFO } from '@/lib/legal-data';

interface ConsultationSectionProps {
  initialService?: string;
}

export default function ConsultationSection({ initialService }: ConsultationSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Direito Trabalhista');
  const [mode, setMode] = useState<'presencial' | 'online'>('presencial');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*Solicitação de Consulta Jurídica*\n` +
      `*Nome:* ${name}\n` +
      `*Telefone:* ${phone}\n` +
      `*Área:* ${service}\n` +
      `*Modalidade:* ${mode === 'presencial' ? 'Presencial (Campinas)' : 'Videoconferência Online'}\n` +
      `*Resumo do Caso:* ${brief || 'Não informado'}`;

    const whatsappUrl = `https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div id="agendar-consulta-section" className="w-full bg-white rounded-2xl shadow-xl border border-[#c5a880]/30 p-6 sm:p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-[#725b38] bg-[#fedeb2]/40 px-3 py-1 rounded-full">
            Atendimento Exclusivo
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 mt-3">
            Agende sua Consulta com um Advogado Especialista
          </h3>
          <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
            Atendimento presencial em nossa sede no Centro de Campinas ou teleconsulta por vídeo para todo o Brasil. Resposta ágil com sigilo profissional.
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2 font-serif">
              Solicitação Registrada com Sucesso!
            </h4>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              Você está sendo redirecionado para o WhatsApp do escritório ({OFFICE_INFO.whatsapp}) para confirmar o horário com nosso plantão.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-[#725b38] underline hover:text-[#584323]"
            >
              Fazer outro agendamento
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silveira"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#725b38] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(19) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#725b38] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Área Jurídica *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#725b38] bg-white transition-all"
                >
                  <option value="Direito Trabalhista">Direito Trabalhista (Demissão, Acidente, Horas Extras)</option>
                  <option value="Direito de Família & Sucessões">Direito de Família (Divórcio, Guarda, Pensão, Inventário)</option>
                  <option value="Direito Cível & Consumidor">Direito Cível (Negativação, Acidentes, Contratos)</option>
                  <option value="Outra Demanda">Outra Demanda Jurídica</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Formato de Atendimento *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMode('presencial')}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      mode === 'presencial'
                        ? 'bg-[#131b2e] text-white border-[#131b2e]'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <MapPin size={14} className={mode === 'presencial' ? 'text-[#fedeb2]' : ''} />
                    <span>Presencial (Campinas)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('online')}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      mode === 'online'
                        ? 'bg-[#131b2e] text-white border-[#131b2e]'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <Video size={14} className={mode === 'online' ? 'text-[#fedeb2]' : ''} />
                    <span>Videoconferência</span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Breve Descrição do seu Caso (Opcional & Confidencial)
              </label>
              <textarea
                rows={3}
                placeholder="Explique brevemente o que aconteceu ou a sua dúvida principal..."
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#725b38] transition-all resize-none"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
              <ShieldAlert size={14} className="text-[#725b38] shrink-0" />
              <span>Seus dados são protegidos por sigilo profissional da OAB e LGPD.</span>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#725b38] hover:bg-[#584323] text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              <Send size={16} />
              <span>Solicitar Agendamento Imediato no WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
