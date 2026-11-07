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
    titulo: 'Página de Agendamento para Psicanálise',
    categoria: 'Landing Page de Alta Conversão',
    descricao:
      'Estrutura focada em acolhimento e conversão de pacientes particulares diretamente para agendamento no WhatsApp. 100% otimizada para celular.',
    beneficios: ['Agendamento pelo WhatsApp', '100% no celular', 'Otimizada para o Google'],
    imagem: '/projetos/psicanalise.png',
    linkDemo: 'https://jackssander-psi.vercel.app/',
  },
  {
    titulo: 'FinFlow — Gestão Financeira Inteligente',
    categoria: 'Web Application / Dashboard',
    descricao:
      'Painel intuitivo de controle financeiro com gráficos dinâmicos, relatórios de fluxo de caixa e gestão de despesas em tempo real.',
    beneficios: ['Gráficos em tempo real', 'Fluxo de caixa', 'Controle de despesas'],
    imagem: '/projetos/finflow.png',
    linkDemo: 'https://financas-delta-seven.vercel.app/',
  },
  {
    titulo: 'Zentask — Controle de tarefas e anotações pessoais',
    categoria: 'Inteligência Artificial & SaaS',
    descricao:
      'Aplicação para controle de tarefas, com bloco de notas rapido .',
    beneficios: ['Foco com pomodoro integrado', 'Tarefas organizadas por dia', 'Estatíscias da sua rotina'],
    imagem: '/projetos/Zentask.png',
    linkDemo: 'https://tasklist-two-tau.vercel.app/',
  },
]
