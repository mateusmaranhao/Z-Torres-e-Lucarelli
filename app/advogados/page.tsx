import Link from 'next/link';
import { ShieldCheck, CheckCircle2, MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { LAWYERS, OFFICE_INFO } from '@/lib/legal-data';

export const metadata = {
  title: 'Corpo Jurídico | Torres & Luccarelli Advogados Associados Campinas',
  description: 'Conheça nossos sócios e associados: Dr. Evandro Luís Luccarelli, Dra. Zilla Maria Torres e Dra. Letícia Rossini Leão.',
};

export default function AdvogadosPage() {
  return (
    <div className="w-full font-sans bg-[#f7f9fb]">
      {/* Header Banner */}
      <section className="bg-[#131b2e] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#fedeb2] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#fedeb2] font-semibold">Corpo Jurídico</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#fedeb2] font-bold">
              Sócios e Associados
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Excelência Técnica e Liderança Institucional
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              Advogados de sólida formação acadêmica, atuantes nas principais comissões da OAB e comprometidos com a defesa intransigente de cada causa.
            </p>
          </div>
        </div>
      </section>

      {/* Lawyers List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        {LAWYERS.map((lawyer, index) => (
          <div
            key={lawyer.id}
            id={lawyer.id}
            className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-100 border border-gray-200">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
                  {lawyer.role}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 mt-1">
                  {lawyer.name}
                </h2>
                <div className="inline-block mt-2 px-3 py-1 rounded bg-[#131b2e] text-[#fedeb2] text-xs font-bold uppercase tracking-wider">
                  {lawyer.oab}
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {lawyer.bio}
              </p>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                  Formação Acadêmica e Representatividade Institucional:
                </h3>
                <ul className="space-y-2.5">
                  {lawyer.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <CheckCircle2 size={16} className="text-[#725b38] shrink-0 mt-0.5" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                  Áreas Principais de Atuação:
                </div>
                <div className="flex flex-wrap gap-2">
                  {lawyer.areas.map((ar, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-800 text-xs font-medium border border-gray-200">
                      {ar}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${OFFICE_INFO.whatsappRaw}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta com ${lawyer.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs transition-all shadow"
                >
                  <MessageCircle size={15} />
                  <span>Consultar no WhatsApp</span>
                </a>

                <Link
                  href="/agendar-consulta"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#131b2e] hover:bg-[#725b38] text-white font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Agendar Consulta Presencial</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
