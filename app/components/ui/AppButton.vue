<script setup lang="ts">
const props = defineProps<{
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}>()

const isExternalLink = computed(() => {
  return Boolean(props.href && /^(https?:|mailto:)/.test(props.href))
})

const linkTarget = computed(() => {
  return props.href?.startsWith('http') ? '_blank' : undefined
})

const linkRel = computed(() => {
  return props.href?.startsWith('http') ? 'noopener noreferrer' : undefined
})

const linkClasses = computed(() => {
  const variant = props.variant ?? 'primary'
  const base = 'focus-ring cresh-action inline-flex min-h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition'

  if (variant === 'secondary') {
    return [
      base,
      'border-ink-900/20 bg-transparent text-ink-950 hover:border-ink-900/40 hover:bg-ink-900/[0.03]',
      'dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/[0.06]'
    ]
  }

  if (variant === 'ghost') {
    return [
      base,
      'border-transparent bg-transparent text-ink-700 hover:text-ink-950',
      'dark:text-ink-300 dark:hover:text-white'
    ]
  }

  return [
    base,
    'border-ink-950 bg-ink-950 text-white hover:bg-ink-800',
    'dark:border-white dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100'
  ]
})
</script>

<template>
  <a
    v-if="href && isExternalLink"
    :href="href"
    :target="linkTarget"
    :rel="linkRel"
    :class="linkClasses"
  >
    <slot />
  </a>
  <NuxtLink
    v-else-if="href"
    :to="href"
    :class="linkClasses"
  >
    <slot />
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
