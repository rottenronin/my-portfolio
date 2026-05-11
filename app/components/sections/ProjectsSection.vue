<script setup lang="ts">
const { content } = useLanguage()
</script>

<template>
  <section id="projects" class="py-20">
    <div class="section-shell">
      <SectionHeader
        :eyebrow="content.sections.projects.eyebrow"
        :title="content.sections.projects.title"
        :description="content.sections.projects.description"
      />
      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article
          v-for="project in content.projects"
          :key="project.slug"
          class="surface group flex flex-col overflow-hidden rounded-lg transition hover:-translate-y-1 hover:shadow-soft"
        >
          <ProjectVisual :project="project" compact />
          <div class="flex flex-1 flex-col p-5">
            <div class="flex items-start justify-between gap-4">
              <h3 class="text-xl font-semibold text-ink-900 dark:text-white">{{ project.title }}</h3>
              <NuxtLink class="focus-ring rounded-md text-sm font-medium text-sky-700 dark:text-sky-300" :to="`/projects/${project.slug}`">
                {{ content.sections.projects.view }}
              </NuxtLink>
            </div>
            <p class="mt-3 flex-1 text-sm leading-6 text-ink-500 dark:text-ink-300">{{ project.summary }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <TechPill v-for="tech in project.highlights" :key="tech" :label="tech" />
            </div>
          </div>
        </article>
      </div>
      <CAlert class="mt-6" type="info">
        {{ content.sections.projects.alert }}
      </CAlert>
    </div>
  </section>
</template>
