import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Calendar, 
  ArrowDown, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Briefcase,
  Heart,
  Scale,
  School,
  Award,
  Building2,
  Lock,
  Headphones,
  ExternalLink
} from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import { 
  OFFICE_INFO, 
  LAWYERS, 
  PRACTICE_AREAS, 
  TESTIMONIALS, 
  FAQS_GENERAL 
} from '@/lib/legal-data';

export default function HomePage() {
  const quickDemands = [
    {
      title: "Acidentes de Trabalho & CAT",
      desc: "Proteção e indenização integral em lesões laborais e emissão compulsória de CAT.",
      icon: "healing",
      href: "/areas-de-atuacao/direito-trabalhista",
    },
    {
      title: "Doenças Ocupacionais",
      desc: "Reconhecimento de Burnout, depressão e LER decorrentes do ambiente laboral.",
      icon: "psychology",
      href: "/areas-de-atuacao/direito-trabalhista",
    },
    {
      title: "Assédio Moral & Rescisão",
      desc: "Ações de rescisão indireta quando a relação contratual se torna insustentável.",
      icon: "sentiment_very_dissatisfied",
      href: "/areas-de-atuacao/direito-trabalhista",
    },
    {
      title: "Divórcios e Separações",
      desc: "Partilha patrimonial justa, via cartório ou judicial, com máxima discrição.",
      icon: "favorite_border",
      href: "/areas-de-atuacao/direito-de-familia",
    },
    {
      title: "Pensão Alimentícia & Guarda",
      desc: "Fixação, revisão e execução de alimentos com foco no bem-estar dos filhos.",
      icon: "child_care",
      href: "/areas-de-atuacao/direito-de-familia",
    },
    {
      title: "Alienação Parental & Família",
      desc: "Salvaguarda dos vínculos afetivos familiares e medidas urgentes de tutela.",
      icon: "shield",
      href: "/areas-de-atuacao/direito-de-familia",
    },
    {
      title: "Acidentes de Trânsito",
      desc: "Reparação por danos emergentes, lucros cessantes e prejuízos materiais.",
      icon: "minor_crash",
      href: "/areas-de-atuacao/direito-civel",
    },
    {
      title: "Defesa do Consumidor & Cível",
      desc: "Contratos bancários, fraudes, cláusulas abusivas e ações indenizatórias.",
      icon: "balance",
      href: "/areas-de-atuacao/direito-civel",
    },
  ];

  return (
    <div className="flex flex-col w-full font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#131b2e] text-white overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#131b2e] via-[#131b2e]/90 to-[#111c2d]/85 z-10"></div>
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBHRofunM2KmEQCRTquR0011xZkMqB4H6QhOUovrCk0aq1l3DIDytt0oSCjqZRc0PkHpNfGYAqNSX9scDmuunkvl2NAWOwoTCCHeRvSWMwZj1tO5y8ZtI9ifVL3YPrsIMKq08Rfg4T41FVRa7s1NkhpnJlnggU3kvsjFPOHAJSDcxXaeb_KvUQ__a5nifTxMlPs0ZAyzUUZoh2Fp9MlxzDrUBrKIHv-WzilMjZyjY0KW0UmoUZljbjKw')`,
          }}
        ></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28 flex flex-col justify-between min-h-[640px]">
          <div className="max-w-3xl space-y-6">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
              <ShieldCheck size={16} className="text-[#fedeb2]" />
              <span className="text-[11px] uppercase tracking-widest text-[#fedeb2] font-bold">
                Assessoria Jurídica de Excelência em Campinas e Região
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Defesa Estratégica e Soluções Jurídicas em Direito Trabalhista, Família e Cível.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#bfc6df] max-w-2xl font-normal leading-relaxed">
              Compromisso inegociável com os interesses de nossos clientes, unindo tradição, rigor técnico apurado e atendimento humanizado na comarca de Campinas e em todo o Estado.
            </p>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/agendar-consulta"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#725b38] hover:bg-[#8b6f44] text-white font-semibold text-sm transition-all shadow-xl hover:shadow-2xl uppercase tracking-wider"
              >
                <Calendar size={18} className="text-[#fedeb2]" />
                <span>Falar com Advogado Especialista</span>
              </Link>

              <a
                href="#areas-especializadas"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/10"
              >
                <span>Conhecer Áreas de Atuação</span>
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          {/* Trust Badges Strip */}
          <div className="pt-16 mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-[#fedeb2] shrink-0">
                <span className="material-symbols-outlined text-[24px]">history_edu</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-serif">{OFFICE_INFO.yearsOfExperience}</div>
                <div className="text-xs text-gray-300">Atuação Consolidada</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-[#fedeb2] shrink-0">
                <span className="material-symbols-outlined text-[24px]">grade</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-serif">5.0 Estrelas</div>
                <div className="text-xs text-gray-300">{OFFICE_INFO.googleReviewsCount}+ Avaliações no Google</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-[#fedeb2] shrink-0">
                <span className="material-symbols-outlined text-[24px]">gavel</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-serif">{OFFICE_INFO.oab}</div>
                <div className="text-xs text-gray-300">Liderança em Comissões</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-[#fedeb2] shrink-0">
                <span className="material-symbols-outlined text-[24px]">lock</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-serif">Sigilo Absoluto</div>
                <div className="text-xs text-gray-300">Privacidade Garantida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEMANDAS ATENDIDAS / SUPORTE INTEGRAL */}
      <section className="w-full py-20 bg-[#f2f4f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
              Suporte Integral
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mt-2">
              Apoio e Soluções Jurídicas para Questões Complexas
            </h2>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Entendemos que conflitos jurídicos geram desgaste emocional e patrimonial. Atuamos com celeridade e firmeza nas seguintes frentes:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickDemands.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="p-6 rounded-xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#725b38] mb-4 group-hover:bg-[#725b38] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base mb-2 group-hover:text-[#725b38] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-[#725b38] group-hover:translate-x-1 transition-transform">
                  <span>Saber mais</span>
                  <span className="ml-1">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/agendar-consulta"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#131b2e] text-white hover:bg-[#725b38] transition-all font-semibold text-sm shadow-md uppercase tracking-wider"
            >
              <Headphones size={18} className="text-[#fedeb2]" />
              <span>Consulte o seu Caso com um Especialista</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO PRINCIPAL DE ÁREAS DE ATUAÇÃO COM CARDS ESPECÍFICOS */}
      <section className="w-full py-24 bg-white" id="areas-especializadas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
                Especialidades Jurídicas
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-950 mt-1">
                Atuação Dedicada com Núcleos Especializados
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Cada vertente do direito possui peculiaridades próprias. Nossos advogados operam com atualização constante perante os Tribunais do Trabalho e de Justiça.
              </p>
              <Link
                href="/areas-de-atuacao"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#725b38] uppercase tracking-wider hover:underline"
              >
                <span>Ver Todas as Especialidades (Página Geral)</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 3 Dedicated Core Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.slug}
                className="flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-60 w-full relative overflow-hidden bg-gray-900">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/90 via-[#131b2e]/30 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#725b38] text-white text-[11px] font-bold tracking-wider uppercase">
                    {area.tag}
                  </span>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-950 mb-3 group-hover:text-[#725b38] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                      {area.shortDescription}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {area.keyTopics.slice(0, 4).map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-800">
                          <CheckCircle2 size={16} className="text-[#725b38] shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/areas-de-atuacao/${area.slug}`}
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-[#eceef0] hover:bg-[#725b38] hover:text-white text-gray-900 transition-all font-semibold text-xs uppercase tracking-wider group-hover:bg-[#131b2e] group-hover:text-white"
                  >
                    <span>Conhecer {area.title}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOSSA BANCADA / CORPO JURÍDICO */}
      <section className="w-full py-24 bg-[#f2f4f6]" id="advogados">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
              Nossa Bancada
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-950 mt-1">
              Excelência Técnica, Ética e Solidez
            </h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto">
              A excelência no atendimento, a <strong>qualidade técnica</strong> e a forma inovadora e eficiente de operacionalizar o direito vêm ganhando destaque no meio jurídico de Campinas. Isso reflete o reconhecimento de nossos clientes a uma parceria fundamentada em <strong>respeito e confiança mútua</strong>.
            </p>
          </div>

          {/* Foto em equipe de prestígio */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-lg bg-white max-w-4xl mx-auto border border-gray-200">
            <div className="relative h-80 sm:h-96 w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjnzBmib9k6F5CcecB3gFJ2QgmH-2D_Bf7DLQpbUEP4SwV20O0w3xP6Y_W0aNq9gbkCTR-Iw69-kKDjXrcyqaLvS5VGz1-YmT5zlBudK4vUDw0tweOPdubstTFXsXRjhCgplZI-stoETGSRckutT0ymJNYVW3rNaLySDTJzXVsZfBdLoqnkIIeBIjX86s_cIDNb87OIvz_S549z1uVi_JQiL5ChBXFA8S6rzfy8T6YAVSGxViC6SNjpA"
                alt="Sócios e Associados Torres & Luccarelli Advogados em Campinas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/85 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-[11px] font-bold text-[#fedeb2] uppercase tracking-wider">
                    Sócios & Associados
                  </span>
                  <div className="text-xl sm:text-2xl font-serif font-bold">
                    Torres & Luccarelli Advogados Associados
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards individuais dos advogados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LAWYERS.map((lawyer) => (
              <div
                key={lawyer.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 hover:shadow-lg transition-all"
              >
                <div className="h-72 w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-950 mb-1">
                      {lawyer.name}
                    </h3>
                    <div className="inline-block px-2.5 py-0.5 rounded bg-[#eceef0] text-[#725b38] text-[11px] font-bold uppercase tracking-wider mb-4">
                      {lawyer.oab}
                    </div>

                    <ul className="space-y-2 text-gray-600 text-xs leading-relaxed">
                      {lawyer.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-[#725b38] shrink-0 mt-0.5" />
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">Sede Campinas - SP</span>
                    <Link
                      href="/advogados"
                      className="text-xs font-bold text-[#725b38] hover:underline"
                    >
                      Perfil Completo →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ESTRUTURA E INSTALAÇÕES */}
      <section className="w-full py-16 bg-white" id="sobre-o-escritorio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden h-64 shadow-sm bg-gray-100 border border-gray-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCncxzoK0V72zExD6S4b4dbGzdHJLqqGd9r267eoYbcYG77WxyYCW4MUD5qLp9QMdlDv9KkViwIpcRzJoBhJBoCSQhnIsmzG4SCNXYGTxUHJDTiwHyPiTPSZRP9fAF1_npCHVIor68KSiHLMBSxkTa3Lb7OQz8GUzJZKvWnRuqQnAJ9Wv62NzduWygLuw8r4P8-U_4bBEh763v8a5YAcqX2IrMG_fPpVdlDDI4gX8QthfoB1qS0eiHYCg"
                alt="Recepção moderna e discreta Torres & Luccarelli Campinas"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden h-72 shadow-md bg-[#eceef0] border border-gray-300/50 flex flex-col items-center justify-center p-6 text-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnGKQbRYEn3Vliek1lXdbAxKvzVRpvnrUI04KJUb6KCQYfhjyFYBCBA4xdUwj4eRNVtILfLs7Vmy4QK53S-BkIg1Mwi03wA-LUR82d9weg61itBg6RasA7W6blIXPAtEOBvBVaTeYCgb3P2-N2wwzNehu1-nQ7S1Y9ILIiJZwex-mG0gkR4ftL3zSMHZVkVyqGxuDmX0V0MxyzxB9il-pm1kVb8DL8TVSHfYGq87E7kSOkVlULjC6pzw"
                alt="Estátua da Justiça Torres & Luccarelli"
                className="h-40 object-contain mb-3"
              />
              <span className="text-[11px] uppercase font-bold text-[#725b38] tracking-widest">
                Atendimento Reservado
              </span>
              <p className="text-base font-serif font-bold text-gray-900 mt-1">
                Salas individuais com total privacidade para sua consulta
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 shadow-sm bg-gray-100 border border-gray-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiSjTg3G83gF8KBXIamlfmJTXEv8GOR_jAmY0CBFs07ym8e9pKGp7Lkc6tOYx_utL9NCom5Gk29ffttDJ_FIZuGK9yaDq0Rs7hv6g7b9aI9-GpM5gyQyVdgglzHqHfl5JsRHcOiuVj4XuHBUGVXxPUfEJTDf6GA3rdLtZr7NFnkmopBv3WqWoBkyx3rZQPU9BqDM4rWl2ATpIoCx4UgaVpg4OkyZzbZWWqySA1Tg_H8KdovAjbdnzc5g"
                alt="Sala de reuniões executiva para audiências confidenciais"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS E PROVA SOCIAL */}
      <section className="w-full py-24 bg-[#f2f4f6]" id="depoimentos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
                Avaliações Verificadas
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-950 mt-1">
                O Reconhecimento de Nossos Clientes
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Transparência absoluta e dedicação incansável em cada atendimento prestado.
              </p>
            </div>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#eceef0] flex items-center justify-center text-[#725b38]">
                <Star size={26} className="fill-[#725b38] text-[#725b38]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold font-serif text-gray-900">5.0</span>
                  <div className="flex text-[#725b38]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#725b38] text-[#725b38]" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                  <span>Google Reviews • 188 avaliações</span>
                  <CheckCircle2 size={13} className="text-[#725b38]" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((dep) => (
              <div
                key={dep.id}
                className="p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${dep.badgeBg} text-white flex items-center justify-center font-bold text-xs`}>
                        {dep.badge}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {dep.author}
                        </div>
                        <div className="text-[11px] text-gray-400">
                          {dep.source}
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 size={18} className="text-[#725b38]" />
                  </div>

                  <div className="flex text-[#725b38] mb-3">
                    {[...Array(dep.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-[#725b38] text-[#725b38]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                    &quot;{dep.comment}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-[#725b38]">
                  {dep.service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ - DÚVIDAS FREQUENTES */}
      <section className="w-full py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
              Esclarecimentos Rápidos
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-950 mt-1">
              Dúvidas Frequentes sobre Atendimento e Processos
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Respostas objetivas para quem busca amparo profissional imediato.
            </p>
          </div>

          <FaqAccordion items={FAQS_GENERAL} />
        </div>
      </section>

      {/* 8. SEDE EM CAMPINAS & ATENDIMENTO ÁGIL */}
      <section className="w-full py-24 bg-[#131b2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#fedeb2] font-bold">
                Sede em Campinas
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Atendimento Ágil, Ético e Personalizado
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Localizado no coração do Centro de Campinas, nosso escritório dispõe de estacionamento e acesso facilitado para atendê-lo com conforto e absoluta confidencialidade.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#fedeb2] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Endereço Presencial</div>
                    <div className="text-xs text-gray-300 mt-0.5">
                      {OFFICE_INFO.address}, {OFFICE_INFO.city} (CEP {OFFICE_INFO.cep})
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#fedeb2] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Telefonia Central & WhatsApp</div>
                    <div className="text-xs text-gray-300 mt-0.5">
                      {OFFICE_INFO.phone} | {OFFICE_INFO.whatsapp}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#fedeb2] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Correspondência Eletrônica</div>
                    <div className="text-xs text-gray-300 mt-0.5">
                      {OFFICE_INFO.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-all font-semibold text-xs uppercase tracking-wider shadow-lg"
                >
                  <MessageCircle size={18} />
                  <span>Chamar no WhatsApp ({OFFICE_INFO.whatsapp})</span>
                </a>

                <a
                  href={`tel:${OFFICE_INFO.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all font-semibold text-xs uppercase tracking-wider border border-white/15"
                >
                  <Phone size={18} />
                  <span>Ligar Agora ({OFFICE_INFO.phone})</span>
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Google Maps Embed */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-3 border border-white/10 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-gray-950">Localização em Tempo Real</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua General Osório, 1212 - Centro, Campinas - SP, 13010-111")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#725b38] hover:text-[#131b2e] transition-colors"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-200 relative bg-gray-100">
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

                <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-gray-600">
                  <span className="font-medium text-gray-800">
                    Rua General Osório, 1212 - Centro, Campinas - SP
                  </span>
                  <a
                    href={`https://waze.com/ul?q=${encodeURIComponent("Rua General Osório 1212 Campinas")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#725b38] font-bold hover:underline"
                  >
                    Traçar Rota no Waze →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
