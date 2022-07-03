import { TechSkillsEnum, ContactTypeEnum } from 'types'

export interface ResumeDataDto {
  firstName: string
  lastName: string
  photoUrl: string
  title: string
  about: string
  contactInfo: ContactInfoDto[]
  skills: TechSkillsEnum[]
  experience: WorkExperienceDto[]
  education: EducationDto[]
  interests: string[]
}

interface ContactInfoDto {
  name: ContactTypeEnum
  value: string
}

interface WorkExperienceDto {
  position: string
  company: string
  location: string
  from: string
  to: string
  accomplishments: string[]
  skills: string[]
}

interface EducationDto {
  institution: string
  degreeType: string
  from: string
  to: string
  location: string
}
