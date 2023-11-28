<script setup lang="ts">
import { useMedia } from '@uzum/ui-kit'
import type { IFaqSection } from '../../types/FaqSection'

const props = withDefaults(defineProps<{ sections: IFaqSection[], isAsideMobile?: boolean }>(), {
  isAsideMobile: false,
})

const media = useMedia()

const classes = {
  'col-sm-3': !media.isMobileOrTablet,
  'aside-mobile': media.isMobileOrTablet && props.isAsideMobile,
}
</script>

<template>
  <aside
    class="col-mbs-12 aside-sidebar"
    :class="classes"
  >
    <div class="wrapper">
      <FaqSection v-for="section in sections" :key="section.title" :section="section" />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  &.aside-sidebar {
    margin-right: 3.5rem;
    max-width: 22%;
    padding: 0;
    font-family: Inter;
    color: var(--text-primary);
  }

  &.sticky {
    position: sticky;
  }
}
</style>
