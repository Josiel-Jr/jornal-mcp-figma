<template>
  <article class="card group hover:shadow-card-hover transition-shadow">
    <!-- Article Image -->
    <div class="relative h-64 rounded-12 overflow-hidden mb-4">
      <div 
        class="w-full h-full bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${article.imageUrl})` }"
      >
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </div>
    
    <!-- Article Content -->
    <div class="space-y-3">
      <!-- Category and Views -->
      <div class="flex items-center justify-between">
        <span class="category-tag">
          {{ article.category }}
        </span>
        <div class="flex items-center gap-2">
          <svg class="w-3 h-3 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span class="text-xs text-text-secondary">{{ article.views.toLocaleString() }}</span>
        </div>
      </div>
      
      <!-- Article Title -->
      <h3 class="font-playfair font-bold text-lg text-text-primary leading-tight">
        {{ article.title }}
      </h3>
      
      <!-- Article Excerpt -->
      <p class="text-sm text-text-secondary leading-relaxed">
        {{ article.excerpt }}
      </p>
      
      <!-- Article Meta -->
      <div class="pt-4 border-t border-border-dark">
        <div class="flex items-center gap-3">
          <span class="text-xs font-medium text-text-secondary">{{ article.author }}</span>
          <div class="flex items-center gap-1">
            <svg class="w-3 h-3 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-xs text-text-secondary">{{ article.publishDate }}</span>
          </div>
          <span class="text-xs text-text-secondary">{{ article.readTime }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { NewsArticle } from '@/types'

interface Props {
  article: NewsArticle
}

defineProps<Props>()
</script>
