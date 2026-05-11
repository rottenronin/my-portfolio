<script setup lang="ts">
const { content } = useLanguage()
</script>

<template>
  <section id="education" class="border-t border-ink-900/10 py-20 dark:border-white/10">
    <div class="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionHeader
        :eyebrow="content.sections.education.eyebrow"
        :title="content.sections.education.title"
        :description="content.sections.education.description"
      />

      <div class="surface rounded-lg p-5 sm:p-6">
        <ol class="divide-y divide-ink-900/10 dark:divide-white/10">
          <li v-for="item in content.education" :key="`${item.school}-${item.duration}`" class="grid gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[3.25rem_1fr]">
            <div class="flex h-12 w-12 items-center justify-center rounded-md border border-ink-900/10 bg-white text-xs font-semibold text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-sky-300">
              {{ item.school.slice(0, 2).toUpperCase() }}
            </div>

            <div>
              <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 class="text-lg font-semibold text-ink-900 dark:text-white">{{ item.school }}</h3>
                  <p class="mt-1 text-sm font-medium text-ink-700 dark:text-ink-200">{{ item.degree }}</p>
                </div>
                <p class="shrink-0 text-sm text-ink-500 dark:text-ink-300">{{ item.duration }}</p>
              </div>

              <p v-if="item.location" class="mt-2 text-sm text-ink-500 dark:text-ink-300">{{ item.location }}</p>
              <ul v-if="item.details?.length" class="mt-3 space-y-2 text-sm leading-6 text-ink-500 dark:text-ink-300">
                <li v-for="detail in item.details" :key="detail" class="flex gap-3">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/80" aria-hidden="true" />
                  <span>{{ detail }}</span>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
