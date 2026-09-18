import Link from 'next/link';
import { 
  Briefcase, 
  HeartHandshake, 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  ShieldCheck,
  Building,
  Landmark,
  FileCheck2
} from 'lucide-react';
import ConsultationSection from '@/components/ConsultationSection';
import { PRACTICE_AREAS, OFFICE_INFO } from '@/lib/legal-data';

export const metadata = {
  title: 'Áreas de Atuação | Torres & Luccarelli Advogados Associados',
  description: 'Conheça todos os núcleos de atuação jurídica do escritório Torres & Luccarelli em Campinas: Direito Trabalhista, Família e Sucessões, Direito Cível e Consumidor.',
};

export default function GeneralServicesPage() {
  const additionalAreas = [
    {
      title: "Direito Imobiliário & Regularizações",
      desc: "Usucapião judicial e extrajudicial, regularização de escrituras, contratos de locação comercial, distrato imobiliário e reintegração de posse.",
      tag: "Imobiliário",
      icon: Building,
      href: "/areas-de-atuacao/direito-civel",
    },
    {
      title: "Direito Bancário & Fraudes Financeiras",
      desc: "Ações contra golpes do PIX, clonagem de cartões, empréstimos consignados fraudulentos, juros abusivos e devolução em dobro.",
      tag: "Bancário",
      icon: Landmark,
      href: "/areas-de-atuacao/direito-civel",
    },
    {
      title: "Planejamento Patrimonial e Sucessório",
      desc: "Estruturação de Holdings Familiares e doações com reserva de usufruto para proteção do patrimônio e economia expressiva de tributos.",
      tag: "Sucessões",
      icon: FileCheck2,
      href: "/areas-de-atuacao/direito-de-familia",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#f7f9fb]">
      {/* Header Banner */}
      <section className="bg-[#131b2e] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBHRofunM2KmEQCRTquR0011xZkMqB4H6QhOUovrCk0aq1l3DIDytt0oSCjqZRc0PkHpNfGYAqNSX9scDmuunkvl2NAWOwoTCCHeRvSWMwZj1tO5y8ZtI9ifVL3YPrsIMKq08Rfg4T41FVRa7s1NkhpnJlnggU3kvsjFPOHAJSDcxXaeb_KvUQ__a5nifTxMlPs0ZAyzUUZoh2Fp9MlxzDrUBrKIHv-WzilMjZyjY0KW0UmoUZljbjKw')`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#fedeb2] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#fedeb2] font-semibold">Áreas de Atuação</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#fedeb2] font-bold">
              Visão Geral de Serviços
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Núcleos Especializados e Excelência em Práticas Jurídicas
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              O escritório <strong>Torres & Luccarelli</strong> é organizado em núcleos técnicos independentes, liderados por advogados especialistas com dedicação exclusiva a cada matéria. Conheça as páginas específicas de cada serviço abaixo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Specialized Areas Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
            Especialidades em Destaque
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 mt-1">
            Selecione uma Área para Conhecer Nossos Serviços Especializados
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Cada área possui uma página com detalhes aprofundados sobre documentação necessária, prazos e orientações estratégicas.
          </p>
        </div>

        <div className="space-y-12">
          {PRACTICE_AREAS.map((area, idx) => (
            <div
              key={area.slug}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-gray-900">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-[#725b38] text-white text-[11px] font-bold tracking-wider uppercase">
                    {area.tag}
                  </span>
                  <div className="text-white font-serif font-bold text-xl mt-2">
                    {area.title}
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    Coordenação: <span className="text-[#fedeb2] font-semibold">{area.responsibleLawyer}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                    {area.subtitle}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {area.longDescription}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#725b38] mb-3">
                      Demandas Frequentes Deste Núcleo:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {area.demands.slice(0, 4).map((demand, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                          <CheckCircle2 size={15} className="text-[#725b38] shrink-0 mt-0.5" />
                          <span className="font-medium">{demand.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <Link
                    href={`/areas-de-atuacao/${area.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#131b2e] hover:bg-[#725b38] text-white transition-all text-xs font-semibold uppercase tracking-wider shadow-md"
                  >
                    <span>Acessar Página de {area.title}</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(`Olá! Gostaria de falar sobre ${area.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Direto</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outras Frentes Complementares */}
      <section className="py-16 bg-[#eceef0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
              Atuação Interdisciplinar
            </span>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mt-1">
              Outras Frentes Atendidas pelo Escritório
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Demandas que se conectam aos núcleos cível, imobiliário e de família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#725b38] mb-4">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#725b38] tracking-widest">
                      {item.tag}
                    </span>
                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="text-xs font-bold text-[#725b38] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Consultar equipe jurídica</span>
                    <span>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Consultation Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <ConsultationSection />
      </section>
    </div>
  );
}
