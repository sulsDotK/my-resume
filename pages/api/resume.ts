// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ResumeDataDto } from './dto'
import { PhoneIcon } from '@heroicons/react/solid'

const data = {
  name: 'Suleman Khalid',
  title: 'Software Engineer',
  about:
    'As a full-stack web developer with 6+ years of experience, I have a broad skill set in everything web development: Leading frontend teams, building complex business software from the ground up, high-traffic public websites, webshops, showcases, and proof-of-concepts. I specialize myself in Typescript, React, Next.js, Nodejs, HTML, CSS, and GraphQL.',
  contactInfo: [
    {
      name: 'Phone',
      icon: ''
    }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResumeDataDto>
) {
  res.status(200).json(data)
}
