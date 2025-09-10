<template>
  <div class="bg-background-primary border-b border-border-medium">
    <div class="max-w-7xl mx-auto px-8 py-4">
      <!-- Timeline Header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <div class="w-5 h-5 flex items-center justify-center">
            <svg class="w-4 h-4 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="font-playfair font-semibold text-lg text-text-primary">
            Timeline
          </h2>
        </div>
        
        <div class="flex gap-2">
          <button class="w-8 h-8 rounded-10 hover:bg-background-secondary transition-colors flex items-center justify-center">
            <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button class="w-8 h-8 rounded-10 hover:bg-background-secondary transition-colors flex items-center justify-center">
            <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Timeline Dates -->
      <div class="flex gap-4 overflow-x-auto pb-2">
        <button
          v-for="date in timelineDates"
          :key="date.id"
          @click="selectDate(date.id)"
          :class="[
            'timeline-item',
            date.active ? 'active' : ''
          ]"
        >
          {{ date.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TimelineDate } from '@/types'

const timelineDates = ref<TimelineDate[]>([
  { id: '1', date: '2024-09-03', label: '3 de Setembro', active: false },
  { id: '2', date: '2024-09-04', label: '4 de Setembro', active: false },
  { id: '3', date: '2024-09-05', label: '5 de Setembro', active: true },
  { id: '4', date: '2024-09-06', label: '6 de Setembro', active: false },
  { id: '5', date: '2024-09-07', label: '7 de Setembro', active: false },
  { id: '6', date: '2024-09-08', label: '8 de Setembro', active: false },
  { id: '7', date: '2024-09-09', label: '9 de Setembro', active: false },
])

const selectDate = (dateId: string) => {
  timelineDates.value.forEach(date => {
    date.active = date.id === dateId
  })
}
</script>
