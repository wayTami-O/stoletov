import { ref } from 'vue'

export type ProjectCategory = 'experience' | 'freelance' | 'personal'

export type ProjectSlide = {
    date: string
    category: ProjectCategory
}

export const projectSlides: ProjectSlide[] = [
    { date: '[30/07/2025]', category: 'freelance' },
    { date: '[05/08/2025]', category: 'experience' },
    { date: '[12/08/2025]', category: 'personal' },
]

export const selectedProjectIndex = ref<number | null>(null)
