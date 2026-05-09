<script setup lang="ts">
import { profile } from '~/data/portfolio'

const { isDark } = useTheme()

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Open source', href: '#open-source' }
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-ink-900/10 bg-[var(--bg)]/80 backdrop-blur-xl dark:border-white/10">
    <nav class="section-shell flex h-16 items-center justify-between" aria-label="Main navigation">
      <NuxtLink to="/" class="focus-ring rounded-md text-sm font-semibold text-ink-900 dark:text-white">
        {{ profile.fullName }}
      </NuxtLink>
      <div class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="focus-ring rounded-md px-3 py-2 text-sm text-ink-500 transition hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
        >
          {{ item.label }}
        </a>
      </div>
      <div class="flex items-center gap-2">
        <CSwitch
          v-model="isDark"
          name="theme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="cresh-theme-switch"
        />
        <AppButton :href="profile.email" variant="secondary">Contact</AppButton>
      </div>
    </nav>
  </header>
</template>
