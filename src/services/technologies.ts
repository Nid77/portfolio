import technologiesData from '@/assets/json/technologies.json'
import { type Technology } from '@/types/types'


type TechnologyData = Record<string, Technology[]>;

export function getTechnologyByName(name: string): Technology | null {
  try {
    
    const technologies: TechnologyData = technologiesData
    const technology = Object.values(technologies).flat().find((tech) => tech.nom.toLowerCase() === name.toLowerCase())
    return technology || null
  } catch (error) {
    console.error(error)
    return null
  }
}