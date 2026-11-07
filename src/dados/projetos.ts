// Cada projeto segue este "molde". Se esquecer um campo, o TypeScript avisa.
export interface Projeto {
  titulo: string
  categoria: string
  descricao: string
  beneficios: string[]
  imagem: string
  // Deixe sem valor enquanto não houver demonstração online
  linkDemo?: string
}

export const projetos: Projeto[] = [
  {
    titulo: 'Página de Agendamento para Psicanálistas',
    categoria: 'Landing Page de Alta Conversão',
    descricao:
      'Página pensada para transformar visitas em consultas: apresenta o profissional com acolhimento e leva o paciente direto ao agendamento pelo WhatsApp, em qualquer celular.',
    beneficios: ['Agendamento pelo WhatsApp', '100% no celular', 'Otimizada para o Google'],
    imagem: '/projetos/psicanalise.png',
    linkDemo: 'https://jackssander-psi.vercel.app/',
  },
  {
    titulo: 'FinFlow — Gestão Financeira Inteligente',
    categoria: 'Web Application / Dashboard',
    descricao:
      'Painel de controle financeiro que reúne despesas e fluxo de caixa em um só lugar, com gráficos atualizados em tempo real para você decidir com base em dados, e não em planilhas soltas.',
    beneficios: ['Gráficos em tempo real', 'Fluxo de caixa', 'Controle de despesas'],
    imagem: '/projetos/finflow.png',
    linkDemo: 'https://financas-delta-seven.vercel.app/',
  },
  {
    titulo: 'ZenTask — Controle de Tarefas e Anotações',
    categoria: 'Aplicativo Web / Produtividade',
    descricao:
      'Aplicativo para organizar o dia em um só lugar: tarefas por prioridade, cronômetro Pomodoro para manter o foco, bloco de notas rápido e estatísticas para acompanhar a sua evolução. Projeto próprio, desenvolvido do zero.',
    beneficios: ['Foco com Pomodoro integrado', 'Tarefas organizadas por dia', 'Estatísticas da sua rotina'],
    imagem: '/projetos/Zentask.png',
    linkDemo: 'https://tasklist-two-tau.vercel.app/',
  },
]
