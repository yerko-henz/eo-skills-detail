export type characterSkills = {
   name_jp: string
   name_en: string
   description: string
   skills: skill[] | []
}

export type skill = {
   name_jp: string
   name_en: string
   description: string
   required_body_part: 'Arms' | 'Head'
   required_weapon: 'Sword or Rapier' | string
   levels: number
   tags: tags[] | null
   scaling: scaling[]
}

type tags = {
   name: string
   level: number
}

type scaling = {
   name: string
   detail: string[]
}
