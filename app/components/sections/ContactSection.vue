<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <section class="py-20">
    <div class="section-shell">
      <CCard class="surface grid gap-8 rounded-lg p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="eyebrow">Contact</p>
          <h2 class="mt-3 text-3xl font-semibold text-ink-900 dark:text-white">Need a senior engineer for a serious product surface?</h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-ink-500 dark:text-ink-300">
            I can help with Vue/Nuxt architecture, Angular platforms, UI systems, SSR performance and production-ready fullstack delivery.
          </p>
        </div>
        <AppButton :href="profile.email">Start a conversation</AppButton>
      </CCard>
    </div>
  </section>
</template>
