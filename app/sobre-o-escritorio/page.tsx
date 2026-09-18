import Link from 'next/link';
import { ShieldCheck, Award, Users, Scale, MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { OFFICE_INFO } from '@/lib/legal-data';

export const metadata = {
  title: 'Sobre o Escritório | Torres & Luccarelli Advogados Associados Campinas',
  description: 'Conheça a trajetória, valores e estrutura física do escritório Torres & Luccarelli Advogados Associados em Campinas - SP.',
};

export default function SobrePage() {
  return (
    <div className="w-full font-sans bg-[#f7f9fb]">
      {/* Header Banner */}
      <section className="bg-[#131b2e] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#fedeb2] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#fedeb2] font-semibold">Sobre o Escritório</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#fedeb2] font-bold">
              Institucional & História
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 leading-tight">
              Torres & Luccarelli Advogados Associados
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              Tradição, combatividade técnica e excelência humanizada no coração de Campinas. Mais de uma década e meia dedicada à proteção rigorosa dos direitos de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
              Nossa Trajetória
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-950 leading-tight">
              Uma Advocacia Construída sob os Pilares da Ética e do Resultado
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Fundado com o propósito de oferecer uma advocacia artesanal, estratégica e próxima de cada cliente, o escritório <strong>Torres & Luccarelli Advogados Associados</strong> ({OFFICE_INFO.oab}) consolidou sua presença no cenário jurídico paulista pela excelência em causas trabalhistas, de família e contencioso cível.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Acreditamos que por trás de cada processo existe uma família, um trabalhador ou uma empresa que necessita de segurança jurídica, escuta atenta e estratégias sem ilusões. Nossa equipe atua em estreita colaboração, unindo a sabedoria e tradição de profissionais com mais de três décadas de carreira à combatividade e modernidade processual dos tribunais digitais.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl font-serif font-bold text-[#725b38]">{OFFICE_INFO.yearsOfExperience}</div>
                <div className="text-xs text-gray-600 mt-1">De Atuação Sólida em Campinas e Região</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="text-2xl font-serif font-bold text-[#725b38]">188+</div>
                <div className="text-xs text-gray-600 mt-1">Avaliações 5 Estrelas no Google</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjnzBmib9k6F5CcecB3gFJ2QgmH-2D_Bf7DLQpbUEP4SwV20O0w3xP6Y_W0aNq9gbkCTR-Iw69-kKDjXrcyqaLvS5VGz1-YmT5zlBudK4vUDw0tweOPdubstTFXsXRjhCgplZI-stoETGSRckutT0ymJNYVW3rNaLySDTJzXVsZfBdLoqnkIIeBIjX86s_cIDNb87OIvz_S549z1uVi_JQiL5ChBXFA8S6rzfy8T6YAVSGxViC6SNjpA"
                alt="Corpo Jurídico Torres & Luccarelli"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-white text-xs text-gray-600 border-t border-gray-100 flex items-center justify-between">
                <span>Sócios & Associados Torres & Luccarelli</span>
                <span className="font-semibold text-[#725b38]">Campinas - SP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura Física em Campinas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#725b38]">
              Estrutura & Conforto
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 mt-1">
              Instalações Modernas e Reservadas
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Sede central planejada para acolher com conforto, acessibilidade e total privacidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCncxzoK0V72zExD6S4b4dbGzdHJLqqGd9r267eoYbcYG77WxyYCW4MUD5qLp9QMdlDv9KkViwIpcRzJoBhJBoCSQhnIsmzG4SCNXYGTxUHJDTiwHyPiTPSZRP9fAF1_npCHVIor68KSiHLMBSxkTa3Lb7OQz8GUzJZKvWnRuqQnAJ9Wv62NzduWygLuw8r4P8-U_4bBEh763v8a5YAcqX2IrMG_fPpVdlDDI4gX8QthfoB1qS0eiHYCg"
                alt="Recepção moderna"
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-serif font-bold text-gray-900 text-base mb-1">Recepção Elegante</h3>
                <p className="text-xs text-gray-600">Espaço climatizado com atendimento cortês e ágil desde a chegada.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiSjTg3G83gF8KBXIamlfmJTXEv8GOR_jAmY0CBFs07ym8e9pKGp7Lkc6tOYx_utL9NCom5Gk29ffttDJ_FIZuGK9yaDq0Rs7hv6g7b9aI9-GpM5gyQyVdgglzHqHfl5JsRHcOiuVj4XuHBUGVXxPUfEJTDf6GA3rdLtZr7NFnkmopBv3WqWoBkyx3rZQPU9BqDM4rWl2ATpIoCx4UgaVpg4OkyZzbZWWqySA1Tg_H8KdovAjbdnzc5g"
                alt="Sala de Reuniões"
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-serif font-bold text-gray-900 text-base mb-1">Sala de Reuniões</h3>
                <p className="text-xs text-gray-600">Infraestrutura audiovisual de ponta para teleconferências e alinhamento tático.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBHRofunM2KmEQCRTquR0011xZkMqB4H6QhOUovrCk0aq1l3DIDytt0oSCjqZRc0PkHpNfGYAqNSX9scDmuunkvl2NAWOwoTCCHeRvSWMwZj1tO5y8ZtI9ifVL3YPrsIMKq08Rfg4T41FVRa7s1NkhpnJlnggU3kvsjFPOHAJSDcxXaeb_KvUQ__a5nifTxMlPs0ZAyzUUZoh2Fp9MlxzDrUBrKIHv-WzilMjZyjY0KW0UmoUZljbjKw"
                alt="Gabinetes Privativos"
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-serif font-bold text-gray-900 text-base mb-1">Gabinetes Privativos</h3>
                <p className="text-xs text-gray-600">Salas de consulta individual com isolamento acústico para total confidencialidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#131b2e] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Venha nos Conhecer em Campinas
          </h2>
          <p className="text-sm text-gray-300 mt-2 mb-8">
            Agende um horário para tomar um café e conversar com nossos advogados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agendar-consulta"
              className="px-6 py-3.5 rounded-xl bg-[#725b38] hover:bg-[#8b6f44] text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Agendar Horário
            </Link>
            <a
              href={`https://wa.me/${OFFICE_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp: {OFFICE_INFO.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
