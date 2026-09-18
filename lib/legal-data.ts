export interface Lawyer {
  id: string;
  name: string;
  oab: string;
  role: string;
  image: string;
  education: string[];
  bio: string;
  areas: string[];
  contactEmail?: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  tag: string;
  image: string;
  icon: string;
  demands: { title: string; desc: string }[];
  keyTopics: string[];
  faq: { question: string; answer: string }[];
  responsibleLawyer: string;
  urgencyWarning?: string;
}

export const OFFICE_INFO = {
  name: "Torres & Luccarelli Advogados Associados",
  shortName: "Torres & Luccarelli",
  oab: "OAB/SP 48.912",
  phone: "(19) 3234-8800",
  whatsapp: "(19) 98117-8266",
  whatsappRaw: "5519981178266",
  email: "contato@torresluccarelli.adv.br",
  address: "Rua General Osório, 1212, Sl 104 - Centro",
  city: "Campinas - SP",
  cep: "13010-111",
  hours: "Segunda a Sexta: 08:30 às 18:30",
  googleRating: 5.0,
  googleReviewsCount: 188,
  yearsOfExperience: "+15 Anos",
};

export const LAWYERS: Lawyer[] = [
  {
    id: "dr-evandro-luccarelli",
    name: "Dr. Evandro Luís Luccarelli",
    oab: "OAB/SP 411.342",
    role: "Sócio Fundador & Coordenador do Núcleo Trabalhista",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDejcDXEz-VwVjY_wzh27WeBwEQbk1MOuu5yMz2lUhXkKf7CfdszoRs3f0liqs8Kv-cWfs4_GzIq9EfephPL_YpkptvMFutyzEfrmgyx3abLNhnpd9SYjv-6dNlU6rOhlAk819rm-Yyy-spZKLNSqmzuXrJL-UkhGmARJ1dS3h_A6zfbvFjBF_aO1K12xEyQmddnWIACzf9QwzRLs3TxKdBlCOMnDRYUdFHLV3YQFfbfwhFHRZNfPz7Dw",
    bio: "Advogado atuante com sólida carreira voltada à defesa rigorosa dos direitos fundamentais do trabalhador e compliance trabalhista corporativo. Possui destacada liderança na advocacia paulista e na comarca de Campinas.",
    education: [
      "Graduado em Direito pela Universidade São Francisco – USF",
      "Pós-graduado pela ESD – Faculdade Unita – Campinas 'lato sensu' em Direito e Processo do Trabalho",
      "Membro da Comissão de Direitos e Prerrogativas da 3ª Subseção OAB Campinas – Triênio 2019/2021",
      "Presidente da Comissão de Fiscalização do Exercício Profissional 3ª Subseção OAB Campinas – Triênio 2025/2027",
    ],
    areas: ["Direito do Trabalho", "Acidentes Ocupacionais", "Rescisão Indireta", "Horas Extras e Verbas Rescisórias"],
    contactEmail: "evandro@torresluccarelli.adv.br",
  },
  {
    id: "dra-zilla-torres",
    name: "Dra. Zilla Maria Torres",
    oab: "OAB/SP 43.620",
    role: "Sócia Fundadora & Coordenadora do Núcleo Cível e Contratual",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRjeVSoH8FIXNpBOD03FPXsikNKTKDG2tAGi1-ttzB09BzdVYKI4v719PX17F2sfI4p9kj2BhY7H1wpkXpo4EdeDXiqkyc4fZ_sm39BjY7BpLaFyxV73oB5IaY856WHw-sP3abqeF21-46uH13_b3e2pcZFcvxAEntuDk9PDpFCZ1DdGjGpue3lOzhahUY2iLeQcsux23QtmJ2jr20cuhS6ixPx8VMMIzN3YOcFFEdfUplAthExm5Wtg",
    bio: "Mais de três décadas de história e respeitabilidade no meio jurídico de Campinas e do Tribunal de Justiça de São Paulo. Conduz litígios civis de alta complexidade com serenidade, equilíbrio e rigor técnico.",
    education: [
      "Graduada pela tradicional Pontifícia Universidade Católica de Campinas – PUC-Campinas",
      "Especialista em Direito Civil, Obrigações e Resoluções Contratuais Complexas",
      "Mais de três décadas de sólida atuação em Direito do Consumidor e Direito Empresarial",
      "Conselheira jurídica em negociações patrimoniais e acordos pré-processuais",
    ],
    areas: ["Direito Civil Estratégico", "Defesa do Consumidor", "Contratos e Danos", "Indenizações"],
    contactEmail: "zilla@torresluccarelli.adv.br",
  },
  {
    id: "dra-leticia-rossini",
    name: "Dra. Letícia Rossini Leão",
    oab: "OAB/SP 480.849",
    role: "Advogada Associada & Especialista em Direito de Família",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVzUth34vri3lKbC3Gq3hQDV-sSSaeL30FWq0XCMC5ElmcZt_ZktgGwsKCrKMZXkHPi7wMnmesdZYwy7QmLuI6BRwREGUChmqyto4ljQoBhFBEj_dG0-KeUn_HVeEWQEx1lXWSCtUu91av6dui8TiiEhFAM_LjrUS7GRuSZiVI6ZgtkHzv_QdHK649TFmWC7R3hpb2eUcCNUv_aEByRhnlo_GFN6sXgQzXWa9zgWNgcF7D-xCQyTB45A",
    bio: "Advogada com visão moderna e humanizada, especialista em litígios e acordos familiares, partilhas sucessórias e medidas de proteção à infância e juventude, unindo empatia e assertividade jurídica.",
    education: [
      "Graduada pela Pontifícia Universidade Católica de Campinas – PUC-Campinas",
      "Especialista em Processos Cíveis Estratégicos e Direito das Famílias e Sucessões",
      "Diversos cursos de imersão e extensão em prática processual contenciosa e mediação de conflitos",
      "Capacitação contínua perante o Instituto Brasileiro de Direito de Família (IBDFAM)",
    ],
    areas: ["Divórcio & Separação", "Inventário e Partilha de Bens", "Pensão Alimentícia", "Guarda e Alienação Parental"],
    contactEmail: "leticia@torresluccarelli.adv.br",
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "direito-trabalhista",
    title: "Direito Trabalhista",
    subtitle: "Proteção Integral aos Direitos do Trabalhador e Reparação de Danos Corporativos",
    tag: "Direito do Trabalho",
    icon: "gavel",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx4G-rSHOIXIu_a2xo3Lr9l1DdhCr7LIPfIPThkQAd5tCCjpWepfUsqr5jQYKrk9avEh82DzF1ppL8n0Ge6hZgG_KHchQfbdZllXAT4go9Yv7aDcdQK7UCfxCiANx37Sro2rZCUi9IqNj2EUTOEikaI3v7_377ABMuqblhi1xK8KozaWePZInbyTO39mD3Bd9JgvqDWbEKDMiEWJ6nZQZpIjQm5fmCCljSMN5f5EdPJdI__nwhWnF1ww",
    shortDescription: "Ampla atuação na salvaguarda dos direitos do trabalhador e no equilíbrio das relações corporativas perante a CLT.",
    longDescription: "Nosso núcleo especializado em Direito do Trabalho em Campinas atua com combatividade para restaurar direitos violados em indústrias, comércios, empresas de tecnologia e logística. De acidentes graves no ambiente produtivo à cobrança de verbas ocultadas, atuamos com perícia técnica, provas testemunhais minuciosas e cálculo exato de haveres.",
    responsibleLawyer: "Dr. Evandro Luís Luccarelli",
    urgencyWarning: "Fique atento aos prazos prescricionais: você tem até 2 anos após o fim do contrato para ingressar com a ação trabalhista e pleitear os últimos 5 anos de direitos.",
    keyTopics: [
      "Acidentes de trabalho e emissão de CAT",
      "Doenças ocupacionais e estabilidade provisória",
      "Assédio moral e rescisão indireta do contrato",
      "Horas extras e verbas rescisórias retidas",
      "Adicional de periculosidade e insalubridade",
      "Equiparação salarial e desvio de função",
      "Fraude na contratação como PJ (Pejotização)",
    ],
    demands: [
      {
        title: "Acidente de Trabalho & Emissão de CAT",
        desc: "Garantia de indenização integral para despesas médicas, pensão vitalícia proporcional à incapacidade e emissão judicial da CAT quando o empregador se omite.",
      },
      {
        title: "Doenças Ocupacionais (Burnout, LER/DORT)",
        desc: "Comprovação de nexo de causalidade com o ambiente corporativo com suporte de peritos médicos de confiança para concessão de estabilidade de 12 meses.",
      },
      {
        title: "Rescisão Indireta (A 'Justa Causa' da Empresa)",
        desc: "Saia do emprego com todos os direitos de uma demissão imotivada (aviso prévio, FGTS + 40%, seguro-desemprego) quando a chefia pratica assédio ou descumpre a lei.",
      },
      {
        title: "Horas Extras & Banco de Horas Inválido",
        desc: "Apuração e cobrança de horas extraordinárias não pagas, sobreaviso, intervalos para refeição suprimidos e viagens corporativas a serviço.",
      },
      {
        title: "Fraude de PJ (Pejotização)",
        desc: "Reconhecimento de vínculo de emprego sob a CLT para profissionais que cumprem horário, subordinação e pessoalidade como pessoa jurídica fictícia.",
      },
    ],
    faq: [
      {
        question: "Fui demitido e não recebi tudo o que tinha direito. Quanto tempo tenho para processar?",
        answer: "O prazo constitucional é de 2 anos a contar da data de rescisão contratual. Nesse processo, é possível cobrar as verbas e reflexos dos últimos 5 anos de contrato.",
      },
      {
        question: "A empresa pode me demitir após um acidente de trabalho ou cirurgia?",
        answer: "Não. Empregado afastado por auxílio-doença acidentário (B91) possui estabilidade provisória de 12 meses após o retorno ao trabalho pelo INSS. Em caso de demissão ilegal, cabe reintegração imediata ou indenização substitutiva integral.",
      },
      {
        question: "Como funciona a rescisão indireta?",
        answer: "É o pedido formulado pelo empregado na Justiça do Trabalho em razão de falta grave cometida pelo patrão (atraso de salários, assédio moral continuado, exigência de tarefas perigosas). Você recebe todas as verbas rescisórias sem precisar pedir demissão.",
      },
    ],
  },
  {
    slug: "direito-de-familia",
    title: "Direito de Família e Sucessões",
    subtitle: "Condução Sensível, Firme e Discreta para Proteger Vínculos e Patrimônio",
    tag: "Família & Sucessões",
    icon: "favorite_border",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBibk8FQncK-7Up6h9eyCWVcR02dm9CG6lLP5rz-QOB4L1WnplnPZxQHFN9zZY1xKdbEvvWmifk_liba-jacdZ9puhpIIUbJ8vEhx5zuHUQ5DVCCPV5yuLorDnStMtIYTvsKkCNVWnVMGTTyq5vSuBdPOCuXB4OFDzbOcCktO5PO7itnI9sVnq9iS4r4r7EpAq2jkjioodLBIr4Za_tLctyDBxNk5i_j3jNYfkqLZDoL6PIniCgKUDdFQ",
    shortDescription: "Condução sensível e firme de questões familiares com ênfase na proteção de crianças, adolescentes e patrimônio.",
    longDescription: "Momentos de transição familiar exigem assessoria técnica com escuta empática e resguardo do patrimônio conquistado. Atuamos com prioridade em soluções consensuais e céleres (inclusive divórcio e inventário em cartório), além de firme representação em litígios complexos perante as Varas de Família de Campinas e região.",
    responsibleLawyer: "Dra. Letícia Rossini Leão & Dra. Zilla Maria Torres",
    urgencyWarning: "Para inventários, o prazo legal para abertura sem multa de ITCMD é de até 60 dias a contar do falecimento.",
    keyTopics: [
      "Divórcio consensual e litigioso",
      "Inventário judicial e extrajudicial em cartório",
      "Pensão alimentícia (fixação, revisão e execução com prisão)",
      "Regulamentação de guarda compartilhada e convivência",
      "Alienação parental e medidas protetivas",
      "Reconhecimento e dissolução de união estável",
      "Partilha de empresas familiares e planejamento sucessório",
    ],
    demands: [
      {
        title: "Divórcio em Cartório (Rápido e Discreto)",
        desc: "Quando há consenso entre o casal e ausência de menores de idade, a homologação por escritura pública em cartório é concluída em poucos dias com total sigilo.",
      },
      {
        title: "Pensão Alimentícia & Execução com Pedido de Prisão",
        desc: "Cálculo técnico do trinômio necessidade-possibilidade-proporcionalidade. Cobrança contundente de débitos atrasados através de penhora de bens e prisão cível.",
      },
      {
        title: "Guarda Compartilhada & Convivência Saudável",
        desc: "Estruturação de regimes de convivência que priorizem o bem-estar psicológico das crianças, prevenindo conflitos nos finais de semana e feriados.",
      },
      {
        title: "Inventário & Partilha de Bens e Imóveis",
        desc: "Regularização célere de herança, mitigando conflitos entre herdeiros e reduzindo a carga tributária do imposto de transmissão (ITCMD).",
      },
      {
        title: "Combate à Alienação Parental",
        desc: "Medidas judiciais urgentes para coibir a manipulação psicológica da criança e restabelecer o contato afetivo imediato com genitor afastado.",
      },
    ],
    faq: [
      {
        question: "Quanto tempo demora um divórcio em cartório?",
        answer: "Com a assessoria de nossa equipe e todos os documentos em ordem, a escritura pode ser lavrada em poucos dias úteis no Cartório de Notas, sem passar pelo Judiciário.",
      },
      {
        question: "O pai ou a mãe pode perder a guarda se praticar alienação parental?",
        answer: "Sim. A Lei de Alienação Parental prevê advertência, ampliação da convivência com o outro genitor, aplicação de multas e, em casos graves, inversão ou alteração da guarda.",
      },
      {
        question: "O que acontece se a pensão alimentícia atrasar?",
        answer: "Com apenas 1 mês de atraso já é possível ingressar com a execução de alimentos pelo rito da prisão (1 a 3 meses em regime fechado) ou penhora de contas bancárias e veículos.",
      },
    ],
  },
  {
    slug: "direito-civel",
    title: "Direito Cível & Consumidor",
    subtitle: "Reparação Incisiva de Perdas, Contratos Complexos e Defesa de Direitos",
    tag: "Cível & Consumidor",
    icon: "balance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2URmABEq1Ek1qzfMHl9TiyftJWxLMcQ4saHRlCf6utXJJjKm3vs07Z6BD_BnrN6P9DvmhgL-qQ0QVLLxZ313bIK-CKRUZMiEv7Q4i0K-43w0vg9e9SAXIk5erps3wI0LFQ2B2cKQXKb0jt9k6jltUrTqw_ipvmfLneumyb1nmuDHaOtW7t0PnFoW9VwfuI0fDX3DowH1VLjmWTsajZHgglOfVG0f3uT514G5Hw4lqXvjaNg6pvu9NnA",
    shortDescription: "Reparação de perdas e defesa incisiva em cobranças abusivas, contratos e acidentes automobilísticos.",
    longDescription: "No âmbito cível e das relações de consumo, cada caso exige análise minuciosa de responsabilidade civil e apuração técnica do prejuízo financeiro. Atuamos com firmeza contra práticas bancárias ilegais, cobranças indevidas, inadimplementos contratuais e na reparação integral de acidentes e danos morais.",
    responsibleLawyer: "Dra. Zilla Maria Torres & Dr. Evandro Luccarelli",
    urgencyWarning: "Casos de negativação indevida ou bloqueios indevidos de contas bancárias comportam pedidos de Liminar de Urgência com prazo de resposta em até 48 horas.",
    keyTopics: [
      "Defesa do consumidor e retirada de negativação indevida",
      "Indenização por acidentes de trânsito e lucros cessantes",
      "Fraudes bancárias, empréstimos não autorizados e golpes do PIX",
      "Cobranças abusivas e contratos de adesão leoninos",
      "Ações indenizatórias por danos morais e materiais",
      "Ações de despejo, rescisão de locação e renovatórias",
      "Cumprimento de contratos e execuções de títulos de crédito",
    ],
    demands: [
      {
        title: "Nome Sujo Indevidamente (SPC/Serasa)",
        desc: "Ação com pedido de liminar imediata para exclusão do cadastro de inadimplentes e indenização por danos morais pelo abalo de crédito suportado.",
      },
      {
        title: "Acidentes de Trânsito & Danos Materiais",
        desc: "Recuperação do valor de conserto do veículo, franquia de seguro, desvalorização da tabela FIPE e lucros cessantes para motoristas de aplicativo e frotas.",
      },
      {
        title: "Fraude Bancária e Golpes Virtuais",
        desc: "Responsabilização das instituições financeiras por falha na segurança do sistema (Súmula 479 do STJ) para restituição imediata dos valores subtraídos.",
      },
      {
        title: "Revisão e Rescisão de Contratos de Compra e Venda",
        desc: "Análise de abusividades contratuais, atraso na entrega de imóveis na planta e recuperação de percentuais pagos (distrato imobiliário).",
      },
      {
        title: "Ações de Cobrança e Execução de Dívidas",
        desc: "Rastreamento patrimonial sofisticado com ferramentas do CNJ (Sisbajud, Renajud, Infojud) para recuperação de créditos para pessoas físicas e jurídicas.",
      },
    ],
    faq: [
      {
        question: "Meu nome foi parar no Serasa por uma conta que eu não reconheço. O que fazer?",
        answer: "Trata-se de inclusão indevida. Entramos imediatamente com ação pedindo liminar para limpar seu nome em até 5 dias e requeremos indenização pelos danos morais causados.",
      },
      {
        question: "Sofri um acidente de carro causado por terceiro embriagado. O que posso cobrar?",
        answer: "É possível cobrar todos os custos de reparo do veículo, guincho, medicamentos, desvalorização do bem, lucros que você deixou de obter no período (lucros cessantes) e danos morais.",
      },
      {
        question: "O banco não quer devolver o dinheiro do golpe do PIX. É viável entrar na justiça?",
        answer: "Sim. O STJ consolidou que as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias.",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: "dep-1",
    author: "Sandro Tafioli",
    badge: "ST",
    badgeBg: "bg-[#131b2e]",
    service: "Ação Trabalhista Concluída",
    rating: 5,
    source: "Avaliação Google",
    comment: "Dr. Evandro muito bom advogado, tirou todas as minhas dúvidas, sempre bem atencioso, responde até fora do horário. Transmite uma segurança sem igual!",
  },
  {
    id: "dep-2",
    author: "Marcos Pires",
    badge: "MP",
    badgeBg: "bg-[#725b38]",
    service: "Resolução de Conflito Cível",
    rating: 5,
    source: "Avaliação Google",
    comment: "Dr. Evandro resolve mesmo! Recomendo a todos de olhos fechados. Ótimo advogado, extremamente transparente e direto ao ponto.",
  },
  {
    id: "dep-3",
    author: "Beatriz Dias",
    badge: "BD",
    badgeBg: "bg-[#111c2d]",
    service: "Processo de Família e Partilha",
    rating: 5,
    source: "Avaliação Google",
    comment: "Melhor advogado da região! Estou muito satisfeita, atencioso demais com toda a família no processo. Recomendo com toda certeza!",
  },
  {
    id: "dep-4",
    author: "Ricardo Alvarenga",
    badge: "RA",
    badgeBg: "bg-[#131b2e]",
    service: "Acidente de Trabalho & Indenização",
    rating: 5,
    source: "Avaliação Google",
    comment: "Tive um acidente grave na fábrica e a empresa não queria me dar o suporte. O Dr. Evandro conseguiu a perícia correta e a indenização que garantiu a tranquilidade da minha família.",
  },
  {
    id: "dep-5",
    author: "Camila Guimarães",
    badge: "CG",
    badgeBg: "bg-[#725b38]",
    service: "Divórcio Consensual em Cartório",
    rating: 5,
    source: "Avaliação Google",
    comment: "A Dra. Letícia foi maravilhosa! Em menos de 2 semanas resolvemos o divórcio e a partilha sem desgaste e com muito respeito. Atendimento humanizado e impecável.",
  },
];

export const FAQS_GENERAL = [
  {
    question: "1. Como funciona a primeira consulta com os advogados?",
    answer: "A primeira consulta pode ser realizada presencialmente em nossa sede central em Campinas ou por videoconferência segura. Analisamos detalhadamente todos os fatos, documentos e riscos sob sigilo absoluto, definindo um plano de ação estratégico transparente antes de qualquer providência formal.",
  },
  {
    question: "2. O escritório atende apenas em Campinas ou em outras regiões?",
    answer: "Atuamos em toda a Região Metropolitana de Campinas (Sumaré, Hortolândia, Paulínia, Valinhos, Vinhedo, Indaiatuba, Americana) e, através dos sistemas dos Tribunais 100% digitais (PJe, e-SAJ), representamos clientes em todo o Estado de São Paulo e âmbito nacional.",
  },
  {
    question: "3. Quais documentos devo reunir antes de falar com o advogado?",
    answer: "Para Direito Trabalhista: Carteira de trabalho (física ou digital), holerites, termo de rescisão e conversas comprobatórias. Para Família: Certidão de casamento/nascimento, documentos dos bens e comprovantes de despesas. Não se preocupe caso falte algum item: nosso time lhe orientará no primeiro contato.",
  },
  {
    question: "4. É possível resolver divórcio ou inventário de forma rápida em cartório?",
    answer: "Sim. Havendo consenso entre as partes e inexistindo menores de idade ou incapazes (ou com certas previsões legais favoráveis), a realização da escritura pública em Cartório de Notas é célere, discreta e infinitamente mais ágil que a via judicial tradicional.",
  },
  {
    question: "5. Como são estipulados os honorários advocatícios?",
    answer: "Nossos honorários seguem rigorosamente as tabelas e parâmetros éticos da OAB/SP. Apresentamos sempre contrato formal detalhando escopo, valores e condições claras de pagamento, sem cobranças ocultas ou surpresas financeiras ao longo da marcha processual.",
  },
];
