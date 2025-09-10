# Instruções de Instalação - DiárioBR

## Pré-requisitos

Antes de executar o projeto, você precisa instalar o Node.js e npm:

### 1. Instalar Node.js
1. Acesse [https://nodejs.org/](https://nodejs.org/)
2. Baixe a versão LTS (recomendada)
3. Execute o instalador e siga as instruções
4. Reinicie o terminal/PowerShell

### 2. Verificar Instalação
Abra um novo terminal/PowerShell e execute:
```bash
node --version
npm --version
```

Ambos os comandos devem retornar números de versão.

## Executando o Projeto

Após instalar o Node.js:

1. **Navegue até o diretório do projeto**:
```bash
cd jornal-digital-vue
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Execute o projeto**:
```bash
npm run dev
```

4. **Acesse no navegador**:
```
http://localhost:3000
```

## Estrutura do Projeto Criada

O projeto foi criado com a seguinte estrutura:

```
jornal-digital-vue/
├── src/
│   ├── components/
│   │   ├── AppHeader.vue      # Cabeçalho com logo e busca
│   │   ├── AppFooter.vue      # Rodapé
│   │   ├── HeroSection.vue    # Seção principal
│   │   ├── TimelineSection.vue # Timeline de datas
│   │   ├── FeaturedSection.vue # Seção de destaques
│   │   ├── CategorySection.vue # Seções por categoria
│   │   └── NewsCard.vue       # Card de notícia
│   ├── types/
│   │   └── index.ts           # Definições TypeScript
│   ├── App.vue                # Componente principal
│   ├── main.ts                # Ponto de entrada
│   └── style.css              # Estilos globais
├── package.json               # Dependências do projeto
├── vite.config.ts            # Configuração do Vite
├── tailwind.config.js        # Configuração do Tailwind
├── tsconfig.json             # Configuração do TypeScript
└── README.md                 # Documentação completa
```

## Características Implementadas

✅ **Design System Completo**:
- Cores baseadas no Figma (#002a80, #282c34, #6b7280)
- Tipografia Playfair Display + Inter
- Gradientes para categorias
- Sombras e bordas personalizadas

✅ **Componentes Principais**:
- Header com busca e navegação
- Hero section com call-to-action
- Timeline interativa
- Cards de notícias responsivos
- Seções por categoria
- Footer

✅ **Funcionalidades**:
- Navegação por datas na timeline
- Cards de notícias com metadados
- Layout responsivo
- Hover effects e transições

## Próximos Passos

Após executar o projeto, você pode:

1. **Customizar o conteúdo**: Edite os dados em `src/App.vue`
2. **Adicionar mais categorias**: Modifique o array `categories`
3. **Integrar com API**: Substitua os dados mock por chamadas reais
4. **Adicionar funcionalidades**: Busca, filtros, paginação, etc.

## Suporte

Se encontrar problemas:
1. Verifique se o Node.js está instalado corretamente
2. Execute `npm install` novamente
3. Verifique se todas as dependências foram instaladas
4. Consulte a documentação do Vue 3 e Tailwind CSS
