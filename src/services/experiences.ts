import ExperiencesData from '@/assets/json/experiences.json'
import { type Experience } from '@/types/types'

export function getExperiences(): Experience[] {
  try {
    return (ExperiencesData as any).experiences 
  } catch (error) {
    console.error(error)
    return []
  }
}
