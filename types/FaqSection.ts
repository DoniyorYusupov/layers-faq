export interface IFaqSectionItem {
  title: string
  description: string
}

export type IFaqSectionItemWithHash = IFaqSectionItem & { hash: string }

export interface IFaqSection {
  title: string
  items: IFaqSectionItem[]
}

export type IFaqSectionWithHash = Omit<IFaqSection, 'items'> & { items: IFaqSectionItemWithHash[] }
