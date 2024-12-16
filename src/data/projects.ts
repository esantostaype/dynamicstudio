import type { Project } from '@/interfaces'

export const projects: Project[] = [
  {
    title: "Izifix",
    slug: "izifix",
    thumbnail: "/images/projects/izifix/izifix.webp",
    gallery: [
      "/images/projects/izifix/izifix-01.webp",
      "/images/projects/izifix/izifix.webp"
    ],
    category: "Web App",
    icon: "custom-software",
    featured: true
  },
  {
    title: "Drumlab",
    slug: "drumlab",
    thumbnail: "/images/projects/drumlab/drumlab.webp",
    gallery: [
      "/images/projects/drumlab/drumlab-01.webp",
      "/images/projects/drumlab/drumlab-02.webp",
      "/images/projects/drumlab/drumlab-03.webp",
      "/images/projects/drumlab/drumlab-04.webp",
      "/images/projects/drumlab/drumlab-05.webp",
      "/images/projects/drumlab/drumlab-06.webp"
    ],
    category: "Branding",
    icon: "branding",
		aspect: "1/1",
    featured: true
  },
  {
    title: "JVS Control",
    slug: "jvs-control",
    thumbnail: "/images/projects/jvs-control/jvs-control.webp",
    gallery: [
      "/images/projects/jvs-control/jvs-control-01.webp"
    ],
    category: "Web Design",
    icon: "websites",
    featured: false
  },
  {
    title: "Sol y Luna",
    slug: "sol-y-luna",
    thumbnail: "/images/projects/sol-y-luna/sol-y-luna.webp",
    gallery: [
      "/images/projects/sol-y-luna/sol-y-luna-01.webp"
    ],
    category: "Web Design",
    icon: "websites",
    featured: true
  }
]