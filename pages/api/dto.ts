import { ContactTypeEnum, TechSkillsEnum } from '../../types'

export interface ResumeDataDto {
  name: string
  photoUrl: string
  title: string
  about: string
  contactInfo: ContactInfoDto[]
  skills: TechSkillsEnum[]
}

interface ContactInfoDto {
  name: ContactTypeEnum
  value: string
}

interface WorkExperienceDto {}
