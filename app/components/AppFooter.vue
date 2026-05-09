<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <footer class="border-t border-ink-900/10 py-10 dark:border-white/10">
    <div class="section-shell flex flex-col gap-4 text-sm text-ink-500 dark:text-ink-300 sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ new Date().getFullYear() }} {{ profile.fullName }}. Senior fullstack developer.</p>
      <div class="flex gap-4">
        <a class="focus-ring rounded-md hover:text-ink-900 dark:hover:text-white" :href="profile.github" rel="noopener noreferrer">GitHub</a>
        <a class="focus-ring rounded-md hover:text-ink-900 dark:hover:text-white" :href="profile.linkedin" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>
