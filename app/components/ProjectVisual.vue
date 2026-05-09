<script setup lang="ts">
import type { Project } from '~/data/portfolio'

defineProps<{ project: Project; compact?: boolean }>()
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg border border-white/10 bg-ink-900 p-3 shadow-soft"
    :class="compact ? 'aspect-[16/10]' : 'aspect-[16/9]'"
  >
    <div class="flex h-full flex-col rounded-md border border-white/10 bg-[#111827]">
      <div class="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
        <span class="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span class="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span class="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span class="ml-3 h-3 w-32 rounded bg-white/10" />
      </div>
      <div class="grid flex-1 grid-cols-[0.72fr_1fr] gap-3 p-4">
        <div class="space-y-3">
          <div class="h-3 w-16 rounded" :style="{ backgroundColor: project.accent }" />
          <CProgressBar :value="82" :color="project.accent" />
          <div class="h-5 w-4/5 rounded bg-white/90" />
          <div class="h-3 w-full rounded bg-white/20" />
          <div class="h-3 w-3/4 rounded bg-white/20" />
          <div class="mt-5 grid grid-cols-2 gap-2">
            <CCard v-for="metric in project.metrics.slice(0, 2)" :key="metric" class="rounded border border-white/10 bg-white/[0.04] p-2">
              <div class="h-2 w-12 rounded bg-white/20" />
              <div class="mt-2 h-4 w-16 rounded bg-white/70" />
            </CCard>
          </div>
        </div>
        <div class="grid gap-2">
          <div class="rounded border border-white/10 bg-white/[0.06] p-3">
            <div class="mb-3 flex items-center justify-between">
              <div class="h-3 w-20 rounded bg-white/30" />
              <div class="h-5 w-12 rounded" :style="{ backgroundColor: project.accent }" />
            </div>
            <div class="grid grid-cols-3 gap-2">
              <div v-for="item in project.highlights.slice(0, 6)" :key="item" class="h-12 rounded bg-white/[0.08]" />
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="rounded border border-white/10 bg-white/[0.05] p-2">
              <div class="h-full rounded bg-white/[0.08]" />
            </div>
            <div class="col-span-2 rounded border border-white/10 bg-white/[0.05] p-2">
              <div class="h-2 w-1/2 rounded bg-white/20" />
              <div class="mt-2 h-2 w-4/5 rounded bg-white/10" />
              <div class="mt-2 h-2 w-2/3 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
