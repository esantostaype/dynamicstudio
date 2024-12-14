export interface Nav {
  label: string
  path: string
  active: boolean
  isScrollLink?: boolean
}

export interface Service {
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  icon: 'websites' | 'e-commerce' | 'custom-software' | 'branding'
  process?: Process[]
  cta?: {
    title: string
    description: string
  }
}

export interface Process {
  title: string
  description: string
  icon?: string
}

export interface Project {
  slug: string
  title: string
  image: string
  category: string
  aspect?: string
}