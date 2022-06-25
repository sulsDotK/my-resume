// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ContactTypeEnum, InterestsEnum, TechSkillsEnum } from '../../types'
import { ResumeDataDto } from './dto'

const data: ResumeDataDto = {
  name: 'Suleman Khalid',
  title: 'Full Stack Engineer',
  photoUrl: 'https://picsum.photos/150/',
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
  skills: Object.values(TechSkillsEnum),
  experience: [
    {
      position: 'Software Engineer',
      company: 'Strategic Systems International',
      location: 'Lahore',
      from: '2019-06-17',
      to: '2021-11-26',
      accomplishments: [
        'Developed dashboard for machines and KPI’s monitoring, user management, machines management and data analysis using graphs, timeline and google map utilizing Angular',
        "Developed worker service (KPI Calculation Service) to calculate different machine's KPI's using C#, Razor Pages, Google API, ElasticSearch, Redis and InfluxDB.",
        'Communicated directly with clients for requirements specifications.',
        'Created separate windows services to centralize logging (LoggingService), and send emails (EmailSenderService) from multiple microservices.',
        'Migrated multiple services from using REST api to Apache Kafka for interservice communication.',
        'Worked on worker service (Application layer) to find and remove data anomalies, apply defined constraints, and generate missing data using ElasticSearch, Razor Pages and InfluxDB.',
        'Created and designed worker service to maintain data consistency between postgres db (used by Web Application), and mySQL db (used by CAS GenisisWorld CRM System).'
      ]
    }
  ],
  education: [
    {
      institution: 'NUCES (FAST-NU)',
      degreeType: 'Bachelors in Computer Science',
      from: '2015-08-15',
      to: '2019-06-01',
      location: 'Lahore'
    },
    {
      institution: 'Punjab College',
      degreeType: 'Intermediate (Pre-Engineering)',
      from: '2013-09-01',
      to: '2015-04-01',
      location: 'Lahore'
    }
  ],
  interests: Object.values(InterestsEnum)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResumeDataDto>
) {
  res.status(200).json(data)
}
