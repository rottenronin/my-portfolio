<script setup lang="ts">
import { profile } from '~/data/portfolio'

const route = useRoute()
const { content } = useLanguage()
const slug = computed(() => String(route.params.slug))
const project = computed(() => content.value.projects.find((item) => item.slug === slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: content.value.seo.projectNotFound })
}

useSeo({
  title: `${project.value.title} | ${profile.fullName}`,
  description: project.value.summary,
  path: `/projects/${project.value.slug}`
})

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.value?.title,
        description: project.value?.summary,
        creator: {
          '@type': 'Person',
          name: profile.fullName
        },
        keywords: project.value?.technologies.join(', ')
      })
    }
  ]
}))

const otherProjects = computed(() => content.value.projects.filter((item) => item.slug !== slug.value))
</script>

<template>
  <div v-if="project">
    <AppHeader />
    <main>
      <section class="section-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <NuxtLink to="/#projects" class="focus-ring rounded-md text-sm font-medium text-sky-700 dark:text-sky-300">
            {{ content.projectPage.back }}
          </NuxtLink>
          <p class="eyebrow mt-8">{{ content.projectPage.eyebrow }}</p>
          <h1 class="mt-4 text-5xl font-semibold tracking-normal text-ink-900 dark:text-white sm:text-6xl">
            {{ project.title }}
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-ink-500 dark:text-ink-300">
            {{ project.description }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <AppButton
              v-for="link in project.links"
              :key="link.href"
              :href="link.href"
              :variant="link.href.startsWith('/') ? 'secondary' : 'primary'"
            >
              {{ link.label }}
            </AppButton>
          </div>
        </div>
        <ProjectVisual :project="project" />
      </section>

      <section class="border-y border-ink-900/10 py-16 dark:border-white/10">
        <div class="section-shell grid gap-10 lg:grid-cols-3">
          <div>
            <p class="eyebrow">{{ content.projectPage.highlightsEyebrow }}</p>
            <h2 class="mt-3 text-3xl font-semibold text-ink-900 dark:text-white">{{ content.projectPage.highlightsTitle }}</h2>
          </div>
          <div class="grid gap-4 lg:col-span-2 sm:grid-cols-2">
            <CCard v-for="metric in project.metrics" :key="metric" class="surface rounded-lg p-5">
              <p class="text-lg font-semibold text-ink-900 dark:text-white">{{ metric }}</p>
            </CCard>
          </div>
        </div>
      </section>

      <section class="section-shell py-16">
        <div class="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p class="eyebrow">{{ content.projectPage.stackEyebrow }}</p>
            <h2 class="mt-3 text-3xl font-semibold text-ink-900 dark:text-white">{{ content.projectPage.stackTitle }}</h2>
          </div>
          <div>
            <div class="flex flex-wrap gap-2">
              <TechPill v-for="technology in project.technologies" :key="technology" :label="technology" />
            </div>
            <p class="mt-6 text-base leading-7 text-ink-500 dark:text-ink-300">
              {{ content.projectPage.stackDescription }}
            </p>
          </div>
        </div>
      </section>

      <section class="section-shell pb-20">
        <h2 class="text-2xl font-semibold text-ink-900 dark:text-white">{{ content.projectPage.moreWork }}</h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-2">
          <NuxtLink
            v-for="item in otherProjects"
            :key="item.slug"
            :to="`/projects/${item.slug}`"
            class="surface focus-ring rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <h3 class="text-lg font-semibold text-ink-900 dark:text-white">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-ink-500 dark:text-ink-300">{{ item.summary }}</p>
          </NuxtLink>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
