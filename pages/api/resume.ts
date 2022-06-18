// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface ResumeDataDto {
  name: string
  title: string
  about: string
}

const data = { name: 'Suleman Khalid', title: 'Software Engineer' }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResumeDataDto>
) {
  res.status(200).json(data)
}
