export interface Nav {
  label: string
  path: string
  active: boolean
  isScrollLink?: boolean
}

export interface Service {
  slug: string
  title: string
  description: string
  image: string
  icon: 'websites' | 'e-commerce' | 'custom-software' | 'branding'
}

export interface Project {
  slug: string
  title: string
  image: string
  category: string
}