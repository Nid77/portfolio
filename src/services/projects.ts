import projetsData from '@/assets/json/projets.json'
import { type Projet } from '@/types/types'

export function getProjects(): Projet[] {
  try {
    return (projetsData as any).projets as Projet[]
  } catch (error) {
    console.error(error)
    return []
  }
}

export function getProjectByName(name: string): Projet | null {
  try {
    return (projetsData as any).projets.find((project: Projet) => project.nom === name) as Projet
  } catch (error) {
    console.error(error)
    return null
  }
}
