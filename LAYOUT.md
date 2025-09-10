# Layout do Jornal Digital - DiárioBR

## Estrutura Visual da Página

```
┌─────────────────────────────────────────────────────────────────┐
│                        HEADER                                   │
│  ┌─────────┐  ┌─────────────────────┐  ┌─────────┐ ┌─────────┐   │
│  │ DiárioBR│  │   Buscar notícias...│  │   ☰    │ │   ⚙️    │   │
│  └─────────┘  └─────────────────────┘  └─────────┘ └─────────┘   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        HERO SECTION                             │
│  ┌─────────────────────────┐  ┌─────────────────────────┐        │
│  │ Seu Jornal Digital      │  │                         │        │
│  │ Interativo              │  │     📰                 │        │
│  │                         │  │  Jornal Digital        │        │
│  │ Acompanhe as últimas    │  │                         │        │
│  │ notícias organizadas    │  │                         │        │
│  │ por data e categoria    │  │                         │        │
│  │                         │  │                         │        │
│  │ [Explorar Notícias]      │  │                         │        │
│  │ [Assinar Newsletter]    │  │                         │        │
│  └─────────────────────────┘  └─────────────────────────┘        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      TIMELINE SECTION                          │
│  🕐 Timeline                    [◀] [▶]                        │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│  │3 de Set │ │4 de Set │ │5 de Set │ │6 de Set │ │7 de Set │     │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘     │
│     (normal)   (normal)   (ATIVO)    (normal)   (normal)         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    FEATURED SECTION                            │
│  Destaques de 5 de Setembro                                    │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    ARTIGO PRINCIPAL                        │ │
│  │  ┌─────────────────┐  Reforma Política Aprovada...       │ │
│  │  │                 │  Nova legislação promete reformar... │ │
│  │  │     IMAGEM      │                                       │ │
│  │  │                 │  Ana Silva • 2h atrás • 5 min       │ │
│  │  └─────────────────┘                                       │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────┐ ┌─────────────────────────┐       │
│  │    ARTIGO SECUNDÁRIO    │ │                         │       │
│  │  ┌─────────────────┐   │ │                         │       │
│  │  │                 │   │ │                         │       │
│  │  │     IMAGEM      │   │ │                         │       │
│  │  │                 │   │ │                         │       │
│  │  └─────────────────┘   │ │                         │       │
│  │  Festival de Cinema...  │ │                         │       │
│  │  Evento reúne diretores │ │                         │       │
│  │  Carlos Mendes • 4h... │ │                         │       │
│  └─────────────────────────┘ └─────────────────────────┘       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    CATEGORY SECTIONS                           │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 🏛️ Política • 2 artigos                    [◀] [▶]       │ │
│  │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │ │
│  │ │   CARD 1    │ │   CARD 2    │ │   CARD 3    │           │ │
│  │ │             │ │             │ │             │           │ │
│  │ │   IMAGEM    │ │   IMAGEM    │ │   IMAGEM    │           │ │
│  │ │             │ │             │ │             │           │ │
│  │ │ Título...   │ │ Título...   │ │ Título...   │           │ │
│  │ │ Resumo...   │ │ Resumo...   │ │ Resumo...   │           │ │
│  │ │ Autor • Tempo│ │ Autor • Tempo│ │ Autor • Tempo│           │ │
│  │ └─────────────┘ └─────────────┘ └─────────────┘           │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 🎭 Cultura • 1 artigo                       [◀] [▶]       │ │
│  │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │ │
│  │ │   CARD 1    │ │   CARD 2    │ │   CARD 3    │           │ │
│  │ │             │ │             │ │             │           │ │
│  │ │   IMAGEM    │ │   IMAGEM    │ │   IMAGEM    │           │ │
│  │ │             │ │             │ │             │           │ │
│  │ │ Título...   │ │ Título...   │ │ Título...   │           │ │
│  │ │ Resumo...   │ │ Resumo...   │ │ Resumo...   │           │ │
│  │ │ Autor • Tempo│ │ Autor • Tempo│ │ Autor • Tempo│           │ │
│  │ └─────────────┘ └─────────────┘ └─────────────┘           │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ ⚽ Esportes • 1 artigo                      [◀] [▶]       │ │
│  │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │ │
│  │ │   CARD 1    │ │   CARD 2    │ │   CARD 3    │           │ │
│  │ │             │ │             │ │             │           │ │
│  │ │   IMAGEM    │ │   IMAGEM    │ │   IMAGEM    │           │ │
│  │ │             │ │             │ │             │           │ │
│  │ │ Título...   │ │ Título...   │ │ Título...   │           │ │
│  │ │ Resumo...   │ │ Resumo...   │ │ Resumo...   │           │ │
│  │ │ Autor • Tempo│ │ Autor • Tempo│ │ Autor • Tempo│           │ │
│  │ └─────────────┘ └─────────────┘ └─────────────┘           │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 💻 Tecnologia • 1 artigo                   [◀] [▶]       │ │
│  │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │ │
│  │ │   CARD 1    │ │   CARD 2    │ │   CARD 3    │           │ │
│  │ │             │ │             │ │             │           │ │
│  │ │   IMAGEM    │ │   IMAGEM    │ │   IMAGEM    │           │ │
│  │ │             │ │             │ │             │           │ │
│  │ │ Título...   │ │ Título...   │ │ Título...   │           │ │
│  │ │ Resumo...   │ │ Resumo...   │ │ Resumo...   │           │ │
│  │ │ Autor • Tempo│ │ Autor • Tempo│ │ Autor • Tempo│           │
│  │ └─────────────┘ └─────────────┘ └─────────────┘           │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        FOOTER                                  │
│              © 2024 DiárioBR. Seu jornal digital interativo.   │
└─────────────────────────────────────────────────────────────────┘
```

## Características do Design

### Cores Principais
- **Azul Primário**: `#002a80` - Usado em botões, links e elementos de destaque
- **Cinza Escuro**: `#282c34` - Cor principal do texto
- **Cinza Médio**: `#6b7280` - Texto secundário e metadados
- **Branco**: `#ffffff` - Fundo principal
- **Cinza Claro**: `#fafafa` - Fundo secundário

### Tipografia
- **Títulos**: Playfair Display (serif, bold)
- **Corpo**: Inter (sans-serif, regular/medium)
- **Tamanhos**: 12px, 14px, 16px, 18px, 20px, 24px, 48px

### Componentes
- **Cards**: Bordas arredondadas (12px), sombra sutil
- **Botões**: Bordas arredondadas (10px), hover effects
- **Timeline**: Navegação horizontal com scroll
- **Categorias**: Gradientes coloridos por tema

### Responsividade
- **Desktop**: Layout em colunas com espaçamento generoso
- **Tablet**: Adaptação do grid para telas médias
- **Mobile**: Stack vertical com scroll horizontal nas seções
