<script setup lang="ts">
import { profile } from '~/data/portfolio'

const { content } = useLanguage()
</script>

<template>
  <section class="py-20">
    <div class="section-shell">
      <CCard class="surface grid gap-8 rounded-lg p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="eyebrow">{{ content.sections.contact.eyebrow }}</p>
          <h2 class="mt-3 text-3xl font-semibold text-ink-900 dark:text-white">{{ content.sections.contact.title }}</h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-ink-500 dark:text-ink-300">
            {{ content.sections.contact.description }}
          </p>
        </div>
        <AppButton :href="profile.email">{{ content.sections.contact.cta }}</AppButton>
      </CCard>
    </div>
  </section>
</template>
