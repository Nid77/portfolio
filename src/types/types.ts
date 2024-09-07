
export interface Competence {
  nom_competence: string
  liste: string[]
  recul_reflexif: string
  projets: Projet[]
  bg_color: string
  bg_second_color: string
  niveaux: Niveau[]
  mon_niveau: string
}

export interface Niveau {
  description: string
  bg_color: string
}

export interface Projet {
  nom: string
  image: string
  description: string
  type: string
}

export interface Technology {
  nom: string
  lien: string
  image: string
  tags: string[]
  projets: string[]
}

export interface Experience {
  type: string
  poste: string
  entreprise: string
  dateDebut: string
  dateFin: string
  description: string
  retour: string
  logo_entreprise: string
  bg_color: string
  competences: ExpCompetence[]
}

export interface ExpCompetence {
  competence: string
  explication: string
}