<script setup lang="ts">
import { articleTopics, profile } from '~/data/portfolio'
</script>

<template>
  <section id="open-source" class="border-y border-ink-900/10 py-20 dark:border-white/10">
    <div class="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <SectionHeader
        eyebrow="Open source"
        title="Reusable tooling, libraries and technical experimentation."
        description="Open-source work is used as a proving ground for component APIs, package ergonomics, documentation and maintainable patterns."
      />
      <div class="grid gap-4 sm:grid-cols-2">
        <NuxtLink :to="profile.github" class="surface focus-ring rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-soft">
          <span aria-hidden="true" class="mb-4 block h-7 w-7 rounded-md border border-sky-500" />
          <p class="text-sm text-ink-500 dark:text-ink-300">Profile</p>
          <h3 class="mt-2 text-xl font-semibold text-ink-900 dark:text-white">GitHub projects</h3>
          <p class="mt-3 text-sm leading-6 text-ink-500 dark:text-ink-300">Libraries, UI experiments and production patterns extracted into reusable code.</p>
        </NuxtLink>
        <CCard class="surface rounded-lg p-5">
          <span aria-hidden="true" class="mb-4 block h-7 w-7 rounded-md border border-sky-500" />
          <p class="text-sm text-ink-500 dark:text-ink-300">Future writing</p>
          <h3 class="mt-2 text-xl font-semibold text-ink-900 dark:text-white">Technical blog architecture</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <TechPill v-for="topic in articleTopics" :key="topic" :label="topic" />
          </div>
        </CCard>
      </div>
    </div>
  </section>
</template>
