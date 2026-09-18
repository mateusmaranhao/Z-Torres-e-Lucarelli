import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Calendar, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  Clock, 
  HelpCircle,
  FileText,
  UserCheck,
  Scale
} from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import ConsultationSection from '@/components/ConsultationSection';
import { PRACTICE_AREAS, LAWYERS, OFFICE_INFO } from '@/lib/legal-data';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return { title: 'Área não encontrada | Torres & Luccarelli' };

  return {
    title: `${area.title} em Campinas - SP | Torres & Luccarelli Advogados`,
    description: area.shortDescription,
  };
}

export default async function ServiceMiniLandingPage({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  // Find responsible lawyer
  const lawyer = LAWYERS.find(
    (l) =>
      area.responsibleLawyer.includes(l.name) ||
      l.areas.some((ar) => ar.toLowerCase().includes(area.tag.toLowerCase()))
  ) || LAWYERS[0];

  const whatsappMessage = `Olá! Gostaria de uma consulta jurídica especializada sobre *${area.title}*. Poderiam me orientar?`;
  const whatsappUrl = `https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="w-full font-sans bg-[#f7f9fb]">
      {/* 1. HERO SECTION MINI-LANDING */}
      <section className="relative bg-[#131b2e] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#131b2e] via-[#131b2e]/95 to-[#111c2d]/90 z-10"></div>
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url('${area.image}')` }}
        ></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#fedeb2] transition-colors">Início</Link>
            <span>/</span>
            <Link href="/areas-de-atuacao" className="hover:text-[#fedeb2] transition-colors">Áreas de Atuação</Link>
            <span>/</span>
            <span className="text-[#fedeb2] font-semibold">{area.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#725b38] text-white text-[11px] font-bold uppercase tracking-wider">
                {area.tag} • Campinas & Região
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                {area.subtitle}
              </h1>

              <p className="text-sm sm:text-base text-[#bfc6df] leading-relaxed max-w-2xl font-normal">
                {area.longDescription}
              </p>

              {/* Urgency Warning Banner */}
              {area.urgencyWarning && (
                <div className="bg-[#c5a880]/15 border border-[#c5a880]/30 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-200">
                  <ShieldAlert size={20} className="text-[#fedeb2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#fedeb2] block mb-0.5">Alerta de Prazo Legal:</span>
                    {area.urgencyWarning}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-all shadow-xl uppercase tracking-wider"
                >
                  <MessageCircle size={18} />
                  <span>Consultar pelo WhatsApp ({OFFICE_INFO.whatsapp})</span>
                </a>

                <a
                  href="#formulario-consulta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/10"
                >
                  <Calendar size={18} className="text-[#fedeb2]" />
                  <span>Agendar Consulta</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-white">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#fedeb2] shrink-0">
                    <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#fedeb2] uppercase font-bold tracking-wider">
                      Advogado Responsável
                    </div>
                    <div className="font-serif font-bold text-white text-base">
                      {lawyer.name}
                    </div>
                    <div className="text-xs text-gray-300">
                      {lawyer.oab}
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3 text-xs text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Atendimento individual e reservado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Análise preliminar de documentos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Cálculo exato de haveres e riscos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Presencial em Campinas ou Online</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <a
                    href={`tel:${OFFICE_INFO.phone.replace(/\D/g, '')}`}
                    className="text-xs font-semibold text-[#fedeb2] hover:underline"
                  >
                    Telefone do Escritório: {OFFICE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEMANDAS DETALHADAS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
            Especialidades Atendidas
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-950 mt-1">
            Como Podemos Defender os Seus Direitos em {area.title}
          </h2>
          <p className="text-sm text-gray-600 mt-3">
            Conheça as principais situações que representamos no dia a dia forense com resultados expressivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {area.demands.map((demand, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#eceef0] flex items-center justify-center text-[#725b38] font-bold font-serif mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-gray-950 text-lg mb-3">
                  {demand.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {demand.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#725b38] hover:text-[#131b2e] flex items-center gap-1 group"
                >
                  <span>Avaliar esta situação com advogado</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PASSO A PASSO DA ATUAÇÃO (METODOLOGIA) */}
      <section className="py-20 bg-[#f2f4f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
              Metodologia Clara
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 mt-1">
              Como Conduzimos Seu Caso do Início ao Fim
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Processo transparente com acompanhamento sistemático de cada andamento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] text-[#fedeb2] flex items-center justify-center mb-4">
                <UserCheck size={24} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#725b38]">Passo 01</span>
              <h3 className="font-serif font-bold text-gray-900 text-base mt-1 mb-2">Consulta Confidencial</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Escuta detalhada do seu relato e análise da viabilidade jurídica sem promessas irrealistas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] text-[#fedeb2] flex items-center justify-center mb-4">
                <FileText size={24} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#725b38]">Passo 02</span>
              <h3 className="font-serif font-bold text-gray-900 text-base mt-1 mb-2">Auditoria & Provas</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Levantamento minucioso de documentos, cálculos periciais e reunião de testemunhas sólidas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] text-[#fedeb2] flex items-center justify-center mb-4">
                <Scale size={24} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#725b38]">Passo 03</span>
              <h3 className="font-serif font-bold text-gray-900 text-base mt-1 mb-2">Atuação Contundente</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Protocolo da petição com pedidos de liminares urgentes ou negociação extrajudicial estratégica.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#131b2e] text-[#fedeb2] flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#725b38]">Passo 04</span>
              <h3 className="font-serif font-bold text-gray-900 text-base mt-1 mb-2">Acompanhamento Ativo</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Você recebe relatórios periódicos em linguagem acessível sobre cada decisão judicial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERFIL DO ADVOGADO COORDENADOR */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#f7f9fb] border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-100 border border-gray-200">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
                  Coordenação Jurídica Especializada
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950">
                  {lawyer.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded bg-[#131b2e] text-[#fedeb2] text-xs font-bold uppercase tracking-wider">
                  {lawyer.oab} • {lawyer.role}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {lawyer.bio}
                </p>

                <div className="space-y-2 pt-2">
                  {lawyer.education.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 size={15} className="text-[#725b38] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#725b38] hover:bg-[#584323] text-white font-semibold text-xs uppercase tracking-wider shadow"
                  >
                    <MessageCircle size={15} />
                    <span>Falar com {lawyer.name.split(' ')[0]}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ ESPECÍFICO DA ÁREA */}
      <section className="py-20 bg-[#f2f4f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
              Tire suas Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 mt-1">
              Perguntas Frequentes sobre {area.title}
            </h2>
          </div>

          <FaqAccordion items={area.faq} />
        </div>
      </section>

      {/* 6. FORMULÁRIO DE CONSULTA DEDICADO */}
      <section id="formulario-consulta" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <ConsultationSection initialService={area.title} />
      </section>
    </div>
  );
}
