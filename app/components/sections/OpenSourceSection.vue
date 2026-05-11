<script setup lang="ts">
const { content } = useLanguage()
</script>

<template>
  <section id="open-source" class="border-y border-ink-900/10 py-20 dark:border-white/10">
    <div class="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <SectionHeader
        :eyebrow="content.sections.openSource.eyebrow"
        :title="content.sections.openSource.title"
        :description="content.sections.openSource.description"
      />

      <div class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="project in content.openSourceProjects"
          :key="project.name"
          :to="project.href"
          class="surface focus-ring group rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-soft"
          target="_blank"
        >
          <span aria-hidden="true" class="mb-4 block h-7 w-7 rounded-md border border-sky-500 transition group-hover:bg-sky-500/10" />
          <p class="text-sm text-ink-500 dark:text-ink-300">{{ project.category }}</p>
          <h3 class="mt-2 text-xl font-semibold text-ink-900 dark:text-white">{{ project.name }}</h3>
          <p class="mt-3 text-sm leading-6 text-ink-500 dark:text-ink-300">{{ project.description }}</p>

          <div class="mt-5 flex flex-wrap gap-2">
            <TechPill v-for="item in project.stack" :key="item" :label="item" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
