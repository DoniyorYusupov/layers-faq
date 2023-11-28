import type { NuxtConfig } from '@nuxt/schema'

export default {
  '@/types/*': './types/*',
} as NuxtConfig['alias']
