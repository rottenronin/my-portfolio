<script setup lang="ts">
import type { Project } from '~/data/portfolio'

defineProps<{ project: Project; compact?: boolean }>()
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg border border-ink-900/10 bg-white p-3 shadow-soft dark:border-white/10 dark:bg-ink-950"
    :class="compact ? 'aspect-[16/10]' : 'aspect-[16/9]'"
    :aria-label="`${project.title} live site preview`"
  >
    <div class="flex h-full flex-col overflow-hidden rounded-md border border-ink-900/10 bg-white dark:border-white/10 dark:bg-[#0f172a]">
      <div class="flex h-8 items-center gap-1.5 border-b border-ink-900/10 bg-ink-50 px-3 dark:border-white/10 dark:bg-white/[0.04]">
        <span class="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span class="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span class="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span class="ml-3 truncate rounded bg-ink-900/10 px-2 py-0.5 font-mono text-[10px] text-ink-500 dark:bg-white/10 dark:text-ink-300">
          {{ project.previewUrl }}
        </span>
      </div>

      <div class="relative min-h-0 flex-1 bg-ink-100 dark:bg-ink-900">
        <iframe
          v-if="project.previewUrl"
          class="h-full w-full origin-top-left scale-[0.42] border-0 bg-white sm:scale-50 lg:scale-[0.42]"
          :style="{ width: '238%', height: '238%' }"
          :src="project.previewUrl"
          :title="`${project.title} live preview`"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
      </div>
    </div>
  </div>
</template>
