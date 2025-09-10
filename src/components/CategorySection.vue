<template>
  <div class="space-y-6">
    <!-- Section Header -->
    <div :class="['section-header', category.id.toLowerCase()]">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-3">
          <span class="text-2xl">{{ category.emoji }}</span>
          <h2 class="font-playfair font-bold text-2xl text-text-primary">
            {{ category.name }}
          </h2>
          <div class="w-px h-6 bg-border-light"></div>
          <span class="text-sm text-text-secondary">
            {{ category.articleCount }} artigos
          </span>
        </div>
      </div>
      
      <div class="flex gap-2">
        <button class="w-8 h-8 rounded-10 hover:bg-white/20 transition-colors flex items-center justify-center">
          <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button class="w-8 h-8 rounded-10 hover:bg-white/20 transition-colors flex items-center justify-center">
          <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Articles Grid -->
    <div class="flex gap-6 overflow-x-auto pb-4">
      <div 
        v-for="article in articles" 
        :key="article.id"
        class="min-w-[300px] flex-shrink-0"
      >
        <NewsCard :article="article" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsCard from './NewsCard.vue'
import type { Category, NewsArticle } from '@/types'

interface Props {
  category: Category
  articles: NewsArticle[]
}

defineProps<Props>()
</script>
