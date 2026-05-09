<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <CTag class="cresh-tag" type="default" :text-content="label" />
</template>
