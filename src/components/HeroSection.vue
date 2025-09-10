<template>
  <section class="bg-background-secondary">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-20 py-12">
      <div class="flex gap-12 items-center">
        <!-- Left Content -->
        <div class="flex-1 space-y-6">
          <div class="space-y-3">
            <h1 class="font-playfair font-bold text-5xl text-text-primary">
              Seu Jornal Digital
            </h1>
            <h2 class="font-playfair font-bold text-5xl text-primary-blue">
              Interativo
            </h2>
          </div>
          
          <p class="text-xl text-text-secondary leading-relaxed">
            Acompanhe as últimas notícias organizadas por data e<br>
            categoria, com uma experiência de leitura moderna e<br>
            intuitiva.
          </p>
          
          <div class="flex gap-4">
            <button class="btn-primary">
              Explorar Notícias
            </button>
            <button class="btn-secondary">
              Assinar Newsletter
            </button>
          </div>
        </div>
        
        <!-- Right Image -->
        <div class="flex-1">
          <div class="relative">
            <div class="h-80 w-full rounded-16 bg-gradient-to-br from-primary-blue to-primary-blue/80 shadow-hero">
              <!-- Placeholder for hero image -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-16"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">📰</div>
                  <p class="text-lg font-medium">Jornal Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section logic can be added here
</script>
