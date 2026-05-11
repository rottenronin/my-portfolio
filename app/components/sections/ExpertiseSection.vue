<script setup lang="ts">
const { content } = useLanguage()
</script>

<template>
  <section id="expertise" class="border-y border-ink-900/10 py-20 dark:border-white/10">
    <div class="section-shell">
      <SectionHeader
        :eyebrow="content.sections.expertise.eyebrow"
        :title="content.sections.expertise.title"
        :description="content.sections.expertise.description"
      />
      <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CCard v-for="group in content.expertise" :key="group.category" class="surface rounded-lg p-5">
          <h3 class="text-lg font-semibold text-ink-900 dark:text-white">{{ group.category }}</h3>
          <div class="mt-5 flex flex-wrap gap-2">
            <TechPill v-for="item in group.items" :key="item" :label="item" />
          </div>
        </CCard>
      </div>
    </div>
  </section>
</template>
