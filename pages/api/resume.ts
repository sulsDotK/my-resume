// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ContactTypeEnum, InterestsEnum, TechSkillsEnum } from '../../types'
import { ResumeDataDto } from './dto'
const {
  TYPESCRIPT,
  REACT,
  ANGULAR,
  NEST_JS,
  NEXT_JS,
  NODE_JS,
  DOT_NET_CORE,
  HTML,
  CSS,
  TAILWIND_CSS,
  C_SHARP,
  DOCKER,
  FIREBASE,
  KAFKA,
  REDIS,
  MONGO_DB,
  MY_SQL,
  POSTGRE_SQL,
  INFLUX_DB
} = TechSkillsEnum

const data: ResumeDataDto = {
  firstName: 'Suleman  ',
  lastName: 'Khalid',
  title: 'Full Stack Engineer',
  photoUrl: 'private/profile-picture.jpeg',
  about:
    'As a web developer with 3+ years of experience, I have a broad skill set in everything web development: Leading backend teams, building software from the ground up, high-traffic public websites, proof-of-concepts and catering to complex business requirements. I specialize myself in backend development, using Typescript, Nest.js, and Node.js.',
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
        "Developed dashboard for machines and KPI's monitoring, with data analysis using graphs, timeline and google maps",
        "Developed worker service to calculate different machine's KPI's",
        'Created separate windows services to centralize logging and email sending processes',
        'Migrated multiple services from REST API to Apache Kafka for inter-service communication',
        'Worked on ETL service to find and remove data anomalies, apply defined constraints, and generate missing data points',
        'Created and designed worker service to maintain data consistency between Postgres DB (used by Web Application), and mySQL DB (used by CAS GenisisWorld CRM System)',
        'Communicated directly with clients for requirements specifications'
      ],
      skills: [
        DOT_NET_CORE,
        ANGULAR,
        C_SHARP,
        HTML,
        CSS,
        DOCKER,
        KAFKA,
        REDIS,
        MY_SQL,
        POSTGRE_SQL,
        INFLUX_DB
      ]
    },
    {
      position: 'Full Stack Engineer',
      company: 'Qureos (via Remotebase)',
      location: 'Remote',
      from: '2021-12-01',
      to: '',
      accomplishments: [
        'Identified and highlighted the impact of technical debt to management',
        'Resolved technical debt issues, whilst managing new features',
        'Documented best practices for front and backend development',
        'Migrated application from Node.js to Nest.js for better architecture',
        "Built secure CRUD api's with consistent behavior",
        'Built chat features from the ground up using Firebase and React',
        'Evaluate performance and coach new developers',
        'Balancing business requirements and delivery deadlines'
      ],
      skills: [
        TYPESCRIPT,
        REACT,
        HTML,
        CSS,
        TAILWIND_CSS,
        NEST_JS,
        NEXT_JS,
        NODE_JS,
        FIREBASE,
        MONGO_DB
      ]
    }
  ],
  education: [
    {
      institution: 'NUCES (FAST-NU)',
      degreeType: 'BS Computer Science',
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
