<template>
  <div id="app" class="min-h-screen bg-background-secondary">
    <!-- Header -->
    <AppHeader />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-8 py-8">
      <!-- Timeline Section -->
      <TimelineSection />
      
      <!-- Featured Section -->
      <div class="py-8">
        <FeaturedSection 
          :featured-article="featuredArticle"
          :secondary-article="secondaryArticle"
        />
      </div>
      
      <!-- Category Sections -->
      <div class="space-y-8">
        <CategorySection 
          v-for="category in categories"
          :key="category.id"
          :category="category"
          :articles="getArticlesByCategory(category.id)"
        />
      </div>
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import FeaturedSection from './components/FeaturedSection.vue'
import CategorySection from './components/CategorySection.vue'
import type { NewsArticle, Category } from './types'

// Sample data - in a real app, this would come from an API
const featuredArticle = ref<NewsArticle>({
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
})

const secondaryArticle = ref<NewsArticle>({
  id: '2',
  title: 'Festival de Cinema Internacional Traz Novidades',
  excerpt: 'Evento reúne diretores renomados e promete revolucionar a indústria cinematográfica nacional com produções inovadoras.',
  category: 'CULTURE',
  author: 'Carlos Mendes',
  publishDate: '4h atrás',
  readTime: '3 min',
  views: 8967,
  imageUrl: 'https://images.unsplash.com/photo-1651437524278-b37b83a6e6d3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})

const categories = ref<Category[]>([
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
])

const articles = ref<NewsArticle[]>([
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
      imageUrl: 'https://images.unsplash.com/photo-1651437524278-b37b83a6e6d3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
  }
])

const getArticlesByCategory = (categoryId: string): NewsArticle[] => {
  const categoryMap: Record<string, string> = {
    'politics': 'POLITICS',
    'culture': 'CULTURE',
    'sports': 'SPORTS',
    'tech': 'TECH'
  }
  
  return articles.value.filter(article => article.category === categoryMap[categoryId])
}
</script>
