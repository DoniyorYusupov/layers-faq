import type { IFaqSection, IFaqSectionWithHash } from '#faq/types/FaqSection'

export default function useFaqSections(sections: IFaqSection[]) {
  const hashedSections = sections
    .map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        hash: `#${trasliterateTitle(section.title, 5).slice(0, -1)}`,
      })),
    })) as IFaqSectionWithHash[]

  return { hashedSections }
}
