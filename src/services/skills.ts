import ProjetsData from '@/assets/json/competence.json'
import { type Skill } from '@/types/types'

export function getProjets(): Skill[] {
  try {
    return (ProjetsData as any).competences
  } catch (error) {
    console.error(error)
    return []
  }
}
