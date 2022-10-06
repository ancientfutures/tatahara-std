<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button justify-end text-2xl transition-transform i-carbon-brightness-contrast dark:rotate-180 dark:transition-transform @click="toggleDark()" />
</template>
