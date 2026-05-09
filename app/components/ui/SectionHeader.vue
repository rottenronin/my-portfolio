<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="max-w-2xl">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 class="mt-3 text-3xl font-semibold tracking-normal text-ink-900 dark:text-white sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base leading-7 text-ink-500 dark:text-ink-300">
      {{ description }}
    </p>
  </div>
</template>
