<script setup lang="ts">
defineProps<{
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}>()
</script>

<template>
  <NuxtLink
    v-if="href"
    :to="href"
    class="focus-ring cresh-action inline-flex rounded-md transition"
    :class="{
      'cresh-action-primary': variant === 'primary' || !variant,
      'cresh-action-secondary': variant === 'secondary',
      'text-ink-700 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white': variant === 'ghost'
    }"
  >
    <CButton
      v-if="variant !== 'ghost'"
      :variant="variant === 'secondary' ? 'outlined' : 'solid'"
      color="#0b0d12"
    >
      <slot />
    </CButton>
    <span v-else class="inline-flex min-h-10 items-center px-4 text-sm font-medium">
      <slot />
    </span>
  </NuxtLink>
  <CButton
    v-else
    class="focus-ring cresh-action"
    :class="{
      'cresh-action-primary': variant === 'primary' || !variant,
      'cresh-action-secondary': variant === 'secondary',
      'cresh-action-ghost': variant === 'ghost'
    }"
    :variant="variant === 'ghost' ? 'text' : variant === 'secondary' ? 'outlined' : 'solid'"
    color="#0b0d12"
  >
    <slot />
  </CButton>
</template>
