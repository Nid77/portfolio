import projetsData from '@/assets/json/projets.json'
import { type Project } from '@/types/types'

export function getProjects(): Project[] {
  try {
    return (projetsData as any).projets as Project[]
  } catch (error) {
    console.error(error)
    return []
  }
}

export function getProjectByName(name: string): Project | null {
  try {
    return (projetsData as any).projets.find((project: Project) => project.nom === name) as Project
  } catch (error) {
    console.error(error)
    return null
  }
}
