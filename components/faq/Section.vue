<script setup lang="ts">
import type { IFaqSectionWithHash } from '#faq/types/FaqSection'

interface Props {
  section: IFaqSectionWithHash
}

defineProps<Props>()
</script>

<template>
  <div class="faq-aside-wrapper">
    <div class="regular faq-aside-link faq-aside-link-header">
      {{ section.title }}
    </div>
    <div
      v-for="item in section.items"
      :key="item.title"
      class="faq-aside-link-wrapper"
    >
      <NuxtLink
        :to="{ path: '/faq', hash: item.hash }"
        class="regular faq-aside-link"
      >
        {{ item.title }}
      </NuxtLink>
      <br>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.faq-aside-wrapper {
  &:first-of-type {
    margin-top: 0;
  }
}

.faq-aside-link {
  display: inline-block;
  font-size: .875rem;
  line-height: 1.2;
  padding: 5px 0;
  color: inherit;
  text-decoration: none;

  &:hover,
  &.exact-active-link {
    color: rgba(0, 0, 0, 0.87);
  }
}
.faq-aside-link-header {
  color: var(--text-primary);
  font-weight: bold;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 5px;
  display: block;
}
</style>
