<script setup lang="ts">
import type { IFaqSection } from '#faq/types/FaqSection'

const props = defineProps<{ sections: IFaqSection[] }>()

const { hashedSections } = useFaqSections(props.sections)

function getDescription(description: string) {
  const el = document.createElement('div')

  el.innerHTML = description.replace('/&nbsp;/g', ' ')

  const olList = el.querySelectorAll('ol')

  olList?.forEach((ol) => {
    ol.classList.add('numb', 'faq-list')

    Array.from(ol.children)?.forEach((li) => {
      li.classList.add('slightly', 'transparent', 'regular')
    })
  })

  const dlList = el.querySelectorAll('dl')

  dlList?.forEach((dl) => {
    dl.classList.add('numb', 'faq-list')

    Array.from(dl.children)?.forEach((dd) => {
      dd.classList.add('slightly', 'transparent', 'regular')
    })
  })

  const paragraphs = el.querySelectorAll('p')

  paragraphs?.forEach((p) => {
    p.classList.add('slightly', 'transparent', 'regular')
  })

  const links = el.querySelectorAll('a') // links with rel

  links.forEach((link) => {
    link.setAttribute('target', '_blank')
  })

  const firstElement = el.firstElementChild

  if (firstElement?.tagName.toLowerCase() === 'ol') {
    firstElement.classList.remove('faq-list')
    firstElement.removeAttribute('style')
  }

  return el.innerHTML
}

function toggleContent(id: string) {
  document.getElementById(id)?.parentElement?.classList.toggle('open')
}
</script>

<template>
  <div id="faq-content">
    <div
      v-for="section in hashedSections"
      :key="section.title"
      class="faq-content-wrapper"
    >
      <div class="faq-header-wrapper">
        <h2 class="faq-header">
          {{ section.title }}
        </h2>
        <div
          class="faq-header-description-wrapper hidden-sm"
          itemscope
          itemprop="acceptedAnswer"
          itemtype="https://schema.org/Answer"
        >
          <ClientOnly>
            <div
              class="faq-section-description"
              itemprop="text"
              v-html="getDescription(section.items[0].description)"
            />
          </ClientOnly>
        </div>
      </div>
      <div
        v-for="item in section.items"
        :key="item.title"
        class="faq-item-wrapper"
      >
        <div
          class="faq-item"
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <h3
            v-if="item.title"
            :id="item.hash"
            class="slightly transparent regular hug inner-wrapper faq-subheader"
            itemprop="name"
            @click="toggleContent(item.title)"
          >
            <i>{{ item.title }}</i>
            <span class="hidden-sm">
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </span>
          </h3>
          <div
            class="inner-wrapper"
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
          >
            <ClientOnly>
              <div
                itemprop="text"
                v-html="getDescription(item.description)"
              />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@uzum/ui-kit/dist/assets/scss/media/media";

#faq {
  @include Media(Mobile, Tablet) {
    .faq-content {
      padding: 0 0 50px;
      color: var(--text-primary);
    }
    .faq-content-wrapper {
      margin-top: 0;
    }

    .faq-header-wrapper {
      padding-left: 12px;
      margin-bottom: 0;
      padding-top: .7rem;
      padding-bottom: .7rem;
      margin-top: 1rem;
    }

    .faq-header-description-wrapper {

      padding-right: 0.5rem;
    }

    .faq-section-description p {
      line-height: 1.5rem !important;
    }

    .faq-header {
        font-size: 1rem;
        line-height: 1.5;
        margin-top: 0;
        color: var(--text-primary);
      }
  }

  @include Media(Laptop, Desktop, DesktopMax) {
    .faq-content-wrapper {
      margin-top: 40px;

      &:first-of-type {
        margin-top: 0;
      }
    }
    .faq-header {
      font-size: 1.5rem;
      margin-bottom: 24px;
      margin-top: 0;
      line-height: 1;
      color: var(--text-primary);
    }

    h3 {
      font-weight: 700;
      font-size: 1.25rem;
    }

    h4
    h5
    p
    ul li
    ol li
    dl {
      font-size: 1rem;
    }

    #faq-content {
      padding: 30px;
      background-color: var(--background-tertiary);
      border: 1px solid var(--border-regular);
    }
  }

  .faq-content-wrapper a {
    color: var(--text-primary);
    white-space: nowrap;
    opacity: 1;
  }

  .faq-section-description p {
    font-size: 1rem !important;
  }
}
</style>
