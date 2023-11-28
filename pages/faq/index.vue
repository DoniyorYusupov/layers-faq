<script setup lang="ts">
import type { IFaqSection } from '#faq/types/FaqSection'

const sections = ref<IFaqSection[]>([
  {
    title: 'Как пользоваться сервисом?',
    items: [
      {
        title: 'Введение',
        description: 'Введение в сервис',
      },
      {
        title: 'Как создать проект?',
        description: 'Как создать проект?',
      },
    ],
  },
  {
    title: 'Как пользоваться сервисом?',
    items: [
      {
        title: 'Введение',
        description: 'Введение в сервис',
      },
      {
        title: 'Как создать проект?',
        description: 'Как создать проект?',
      },
    ],
  },
  {
    title: 'Как пользоваться сервисом?',
    items: [
      {
        title: 'Введение',
        description: 'Введение в сервис',
      },
      {
        title: 'Как создать проект?',
        description: 'Как создать проект?',
      },
    ],
  },
  {
    title: 'Как пользоваться сервисом?',
    items: [
      {
        title: 'Введение',
        description: 'Введение в сервис',
      },
      {
        title: 'Как создать проект?',
        description: 'Как создать проект?',
      },
    ],
  },
])
</script>

<template>
  <div id="faq" class="faq">
    <div id="caregory-content-wrapper-header" class="">
      <div id="faq-header">
        <div class="middle-mbs between-mbs title">
          <h2 class="slightly transparent medium hug">
            Вопрос-Ответ
          </h2>
        </div>
      </div>
    </div>
    <div id="caregory-content-wrapper" class="row">
      <FaqSidebar :sections="sections" />
      <FaqContent :sections="sections" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@uzum/ui-kit/dist/assets/scss/media/media";

#faq {
  max-width: 1240px;
  min-width: 320px;
  width: 95%;
  margin: 0 auto;

  #caregory-content-wrapper-header {
    width: 100%;
    padding-bottom: 14px;
  }

  &.empty-page {
    padding-bottom: 0;
  }

  > aside[express],
  > #caregory-content {
    padding: 0;
  }

  .title {
    margin: 0;
    padding-top: 35px;

    > h1,
    > h2 {
      position: relative;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 1.2;
      padding-right: 2rem;
      margin: 0;
      font-size: 22px;
    }
  }

  #caregory-content-wrapper {
    display: flex;
    margin: 0;
    padding: 20px 0 40px;
    width: 100%;
    align-items: flex-start;

    > aside[express] {
      position: relative;
      width: 260px;

      > div.wrapper {
        > #filters {
          button {
            margin-top: 20px;
          }
        }
      }
    }

    > #category-content {
      width: 50%;
      padding: 0;

      @include Media(Mobile, Tablet) {
        padding: 20px 0 0 0;
      }

      .aside-sidebar {
        font-family: Inter;
        color: var(--text-primary);
      }
    }
  }

  @include Media(Mobile, Tablet) {
    width: 100%;

    #caregory-content-wrapper-header {
      padding: 0 0.5rem;

      .title {
        > h1,
        > h2 {
          font-size: 1.25rem;
        }
      }
    }

    #caregory-content-wrapper {
      .aside-mobile {
        background-color: transparent;
        display: block;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 101;
        max-width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .title {
        padding-top: 0;
      }
    }
  }

  @include Media(Laptop, Desktop, DesktopMax) {
    #caregory-content-wrapper-header {
      .title {
        > h1,
        > h2 {
          font-size: 1.5rem;
        }
      }
    }

    #caregory-content-wrapper {
      aside[express] {
        &.aside-sidebar {
          margin-right: 3.5rem;
          max-width: 22%;
          padding: 0;
        }

        &.sticky {
          position: sticky;
        }
      }
    }
  }
}
</style>
