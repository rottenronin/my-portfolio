<script setup lang="ts">
import type { LanguageCode } from '~/data/i18n'
import { profile } from '~/data/portfolio'

const { isDark } = useTheme()
const { availableLanguages, content, language, setLanguage } = useLanguage()

const navItems = computed(() => [
  { label: content.value.nav.projects, href: '#projects' },
  { label: content.value.nav.expertise, href: '#expertise' },
  { label: content.value.nav.experience, href: '#experience' },
  { label: content.value.nav.education, href: '#education' },
  { label: content.value.nav.openSource, href: '#open-source' }
])
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-ink-900/10 bg-[var(--bg)]/80 backdrop-blur-xl dark:border-white/10">
    <nav class="section-shell flex h-16 items-center justify-between" :aria-label="content.nav.language">
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
        <label class="sr-only" for="language">{{ content.nav.language }}</label>
        <select
          id="language"
          :value="language"
          class="focus-ring rounded-md border border-ink-900/10 bg-transparent px-2 py-2 text-sm text-ink-700 dark:border-white/10 dark:text-ink-100"
          @change="setLanguage(($event.target as HTMLSelectElement).value as LanguageCode)"
        >
          <option v-for="item in availableLanguages" :key="item.code" :value="item.code">
            {{ item.shortLabel }}
          </option>
        </select>
        <CSwitch
          v-model="isDark"
          name="theme"
          :aria-label="isDark ? content.nav.switchToLight : content.nav.switchToDark"
          class="cresh-theme-switch"
        />
        <AppButton :href="profile.email" variant="secondary">{{ content.nav.contact }}</AppButton>
      </div>
    </nav>
  </header>
</template>
