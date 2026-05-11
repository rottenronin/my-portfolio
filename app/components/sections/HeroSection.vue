<script setup lang="ts">
import { profile } from '~/data/portfolio'

const { content } = useLanguage()
</script>

<template>
  <section class="section-shell grid min-h-[calc(100vh-12rem)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
    <div class="reveal">
      <p class="eyebrow">{{ content.hero.specialization }}</p>
      <h1 class="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-ink-900 dark:text-white sm:text-6xl lg:text-7xl">
        {{ profile.fullName }}
      </h1>
      <p class="mt-5 text-2xl font-medium text-ink-700 dark:text-ink-100">
        {{ profile.title }}
      </p>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-ink-500 dark:text-ink-300">
        {{ content.hero.intro }}
      </p>
      <div class="mt-9 flex flex-wrap items-center gap-3">
        <AppButton :href="profile.email">{{ content.nav.contact }}</AppButton>
        <AppButton :href="profile.github" variant="secondary">GitHub</AppButton>
        <AppButton :href="profile.linkedin" variant="ghost">LinkedIn</AppButton>
      </div>
    </div>

    <aside class="reveal surface rounded-lg p-4" aria-label="Engineering profile snapshot">
      <div class="rounded-md border border-ink-900/10 bg-white p-4 dark:border-white/10 dark:bg-ink-900">
        <div class="flex items-center justify-between border-b border-ink-900/10 pb-4 dark:border-white/10">
          <div>
            <p class="font-mono text-xs text-ink-500 dark:text-ink-300">{{ content.hero.systemProfile }}</p>
            <p class="mt-1 text-sm font-medium text-ink-900 dark:text-white">{{ content.hero.systemTitle }}</p>
          </div>
          <span class="rounded-md bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300">{{ content.hero.available }}</span>
        </div>
        <div class="grid gap-3 py-4 sm:grid-cols-2">
          <div class="rounded-md border border-ink-900/10 p-3 dark:border-white/10">
            <p class="text-xs text-ink-500 dark:text-ink-300">{{ content.hero.architectureLabel }}</p>
            <p class="mt-2 text-sm font-medium">{{ content.hero.architectureValue }}</p>
          </div>
          <div class="rounded-md border border-ink-900/10 p-3 dark:border-white/10">
            <p class="text-xs text-ink-500 dark:text-ink-300">{{ content.hero.systemsLabel }}</p>
            <p class="mt-2 text-sm font-medium">{{ content.hero.systemsValue }}</p>
          </div>
          <div class="rounded-md border border-ink-900/10 p-3 dark:border-white/10">
            <p class="text-xs text-ink-500 dark:text-ink-300">{{ content.hero.deliveryLabel }}</p>
            <p class="mt-2 text-sm font-medium">{{ content.hero.deliveryValue }}</p>
          </div>
          <div class="rounded-md border border-ink-900/10 p-3 dark:border-white/10">
            <p class="text-xs text-ink-500 dark:text-ink-300">{{ content.hero.focusLabel }}</p>
            <p class="mt-2 text-sm font-medium">{{ content.hero.focusValue }}</p>
          </div>
        </div>
        <pre class="mt-1 overflow-x-auto rounded-md bg-ink-900 p-4 font-mono text-xs leading-6 text-sky-100 dark:bg-black/30"><code>{{ content.hero.code }}</code></pre>
      </div>
    </aside>
  </section>
</template>
