export interface ResumeDataDto {
  name: string
  title: string
  about: string
  contactInfo: ContactInfo[]
}

interface ContactInfo {
  name: string
  icon: React.Component
}
