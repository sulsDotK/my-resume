// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ContactTypeEnum, TechSkillsEnum } from '../../types'
import { ResumeDataDto } from './dto'

const data: ResumeDataDto = {
  name: 'Suleman Khalid',
  title: 'Full Stack Engineer',
  photoUrl: 'https://picsum.photos/200/',
  about:
    'As a full-stack web developer with 3+ years of experience, I have a broad skill set in everything web development: Leading backend teams, building complex business software from the ground up, high-traffic public websites, showcases, and proof-of-concepts. I specialize myself in Typescript, Nest.js, Node.js.',
  contactInfo: [
    {
      name: ContactTypeEnum.PHONE,
      value: '+92 310 4270920'
    },
    {
      name: ContactTypeEnum.EMAIL,
      value: 'sulsk24@gmail.com'
    },
    {
      name: ContactTypeEnum.LOCATION,
      value: 'Lahore, Pakistan'
    }
  ],
  skills: Object.values(TechSkillsEnum)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResumeDataDto>
) {
  res.status(200).json(data)
}
