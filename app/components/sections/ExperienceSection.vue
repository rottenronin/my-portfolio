<script setup lang="ts">
import { experiences } from '~/data/portfolio'

const selectedExperienceIndex = ref(0)

const experienceSteps = computed(() =>
  experiences.map((experience) => ({
    id: experience.company,
    text: `${experience.company} · ${experience.duration}`
  }))
)

const activeExperience = computed(() => experiences[selectedExperienceIndex.value])
</script>

<template>
  <section id="experience" class="py-20">
    <div class="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="Impact-oriented engineering across product surfaces."
        description="A practical focus on architecture, scalability, UI systems and production applications."
      />
      <div class="mt-10 grid gap-8 lg:grid-cols-[0.38fr_1fr] lg:items-start">
        <div class="experience-stepper-shell surface rounded-lg p-3 sm:p-4">
          <CVerticalStepper
            :steps="experienceSteps"
            :selected-index="selectedExperienceIndex"
            class="experience-stepper"
            @select="selectedExperienceIndex = $event"
          />
        </div>

        <article
          v-if="activeExperience"
          class="experience-detail surface rounded-lg p-5 sm:p-7"
          :aria-labelledby="`experience-${activeExperience.company}`"
        >
          <div>
            <p class="text-sm text-ink-500 dark:text-ink-300">{{ activeExperience.duration }}</p>
            <h3 :id="`experience-${activeExperience.company}`" class="mt-2 text-2xl font-semibold text-ink-900 dark:text-white">
              {{ activeExperience.company }}
            </h3>
            <p class="mt-3 text-base font-medium text-sky-700 dark:text-sky-300">{{ activeExperience.role }}</p>
            <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-500 dark:text-ink-300">
              <span>{{ activeExperience.contract }}</span>
              <span>{{ activeExperience.location }}</span>
            </div>
          </div>

          <div>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-ink-500 dark:text-ink-300">
              <li v-for="impact in activeExperience.impact" :key="impact" class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/80" aria-hidden="true" />
                <span>{{ impact }}</span>
              </li>
            </ul>
            <div class="mt-5 flex flex-wrap gap-2">
              <TechPill v-for="technology in activeExperience.stack" :key="technology" :label="technology" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
