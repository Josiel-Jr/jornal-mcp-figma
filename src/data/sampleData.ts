// Dados de exemplo para o jornal digital
export const sampleNewsData = {
  featuredArticle: {
    id: '1',
    title: 'Reforma Política Aprovada no Senado Gera Debate Nacional',
    excerpt: 'Nova legislação promete reformar o sistema eleitoral brasileiro com mudanças significativas no financiamento de campanhas e transparência.',
    category: 'POLITICS',
    author: 'Ana Silva',
    publishDate: '2h atrás',
    readTime: '5 min',
    views: 12543,
    imageUrl: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=400&fit=crop',
    featured: true
  },

  secondaryArticle: {
    id: '2',
    title: 'Festival de Cinema Internacional Traz Novidades',
    excerpt: 'Evento reúne diretores renomados e promete revolucionar a indústria cinematográfica nacional com produções inovadoras.',
    category: 'CULTURE',
    author: 'Carlos Mendes',
    publishDate: '4h atrás',
    readTime: '3 min',
    views: 8967,
    imageUrl: 'https://images.unsplash.com/photo-1489599803002-2b2b5a7b7b7b?w=800&h=400&fit=crop'
  },

  categories: [
    {
      id: 'politics',
      name: 'Política',
      emoji: '🏛️',
      color: 'politics',
      articleCount: 2
    },
    {
      id: 'culture',
      name: 'Cultura',
      emoji: '🎭',
      color: 'culture',
      articleCount: 1
    },
    {
      id: 'sports',
      name: 'Esportes',
      emoji: '⚽',
      color: 'sports',
      articleCount: 1
    },
    {
      id: 'tech',
      name: 'Tecnologia',
      emoji: '💻',
      color: 'tech',
      articleCount: 1
    }
  ],

  articles: [
    {
      id: '1',
      title: 'Reforma Política Aprovada no Senado Gera Debate Nacional',
      excerpt: 'Nova legislação promete reformar o sistema eleitoral brasileiro com mudanças significativas no financiamento de campanhas e transparência.',
      category: 'POLITICS',
      author: 'Ana Silva',
      publishDate: '2h atrás',
      readTime: '5 min',
      views: 12543,
      imageUrl: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: '2',
      title: 'Festival de Cinema Internacional Traz Novidades',
      excerpt: 'Evento reúne diretores renomados e promete revolucionar a indústria cinematográfica nacional com produções inovadoras.',
      category: 'CULTURE',
      author: 'Carlos Mendes',
      publishDate: '4h atrás',
      readTime: '3 min',
      views: 8967,
      imageUrl: 'https://images.unsplash.com/photo-1489599803002-2b2b5a7b7b7b?w=800&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'Congresso Debate Nova Lei de Transparência',
      excerpt: 'Projeto visa aumentar transparência em órgãos públicos com novas regras de acesso à informação e prestação de contas.',
      category: 'POLITICS',
      author: 'Maria Santos',
      publishDate: '1h atrás',
      readTime: '4 min',
      views: 5432,
      imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'Brasileirão: Final de Semana Decisivo para o Título',
      excerpt: 'Confrontos diretos entre os líderes podem definir o campeão nacional com três rodadas de antecedência.',
      category: 'SPORTS',
      author: 'Lucas Oliveira',
      publishDate: '1h atrás',
      readTime: '5 min',
      views: 15432,
      imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop'
    },
    {
      id: '5',
      title: 'Inteligência Artificial Revoluciona Diagnósticos Médicos',
      excerpt: 'Nova tecnologia permite detecção precoce de doenças com precisão superior a 95%, transformando o futuro da medicina.',
      category: 'TECH',
      author: 'Pedro Alves',
      publishDate: '2h atrás',
      readTime: '7 min',
      views: 11234,
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop'
    },
    {
      id: '6',
      title: 'Economia Brasileira Mostra Sinais de Recuperação',
      excerpt: 'Indicadores econômicos apontam para crescimento sustentável com redução da inflação e aumento do emprego.',
      category: 'POLITICS',
      author: 'Roberto Lima',
      publishDate: '3h atrás',
      readTime: '6 min',
      views: 9876,
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop'
    },
    {
      id: '7',
      title: 'Nova Exposição de Arte Contemporânea Abre em São Paulo',
      excerpt: 'Mostra apresenta obras de artistas emergentes brasileiros com foco em sustentabilidade e tecnologia.',
      category: 'CULTURE',
      author: 'Fernanda Costa',
      publishDate: '5h atrás',
      readTime: '4 min',
      views: 4321,
      imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=400&fit=crop'
    },
    {
      id: '8',
      title: 'Seleção Brasileira Anuncia Lista para Eliminatórias',
      excerpt: 'Técnico convoca 23 jogadores para os próximos jogos das eliminatórias da Copa do Mundo.',
      category: 'SPORTS',
      author: 'Marcos Santos',
      publishDate: '6h atrás',
      readTime: '3 min',
      views: 18765,
      imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=400&fit=crop'
    },
    {
      id: '9',
      title: 'Startup Brasileira Desenvolve App de Mobilidade Sustentável',
      excerpt: 'Plataforma conecta usuários a opções de transporte ecológico, reduzindo emissões de carbono.',
      category: 'TECH',
      author: 'Juliana Rocha',
      publishDate: '8h atrás',
      readTime: '5 min',
      views: 6789,
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop'
    }
  ]
}
