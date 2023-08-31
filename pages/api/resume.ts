// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ResumeDataDto } from 'types/dto'
import { ContactTypeEnum, InterestsEnum, TechSkillsEnum } from '../../types'

const {
  TYPESCRIPT,
  REACT,
  ANGULAR,
  NEST_JS,
  NEXT_JS,
  NODE_JS,
  DOT_NET_CORE,
  TAILWIND_CSS,
  C_SHARP,
  DOCKER,
  FIREBASE,
  KAFKA,
  REDIS,
  MONGO_DB,
  MY_SQL,
  POSTGRE_SQL,
  INFLUX_DB,
  STRIPE,
  AZURE,
  CLOUDFLARE_R2,
  AWS_S3_GLACIER,
  QUICKBOOKS
} = TechSkillsEnum

const recentSkills = [
  TYPESCRIPT,
  NEST_JS,
  REACT,
  TAILWIND_CSS,
  NEXT_JS,
  NODE_JS,
  DOT_NET_CORE,
  C_SHARP,
  FIREBASE,
  REDIS,
  MY_SQL,
  STRIPE,
  AZURE
]

const data: ResumeDataDto = {
  firstName: 'Suleman  ',
  lastName: 'Khalid',
  title: 'Full Stack Developer',
  photoUrl: '/private/profile-picture.jpg',
  about:
    'As a software engineer with 4 years of experience (remote and on-site), I have a broad skill set in everything web development including leading engineering teams, building software from the ground up and catering to complex business requirements.',
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
  skills: Object.values(TechSkillsEnum).filter(
    x =>
      !recentSkills.includes(x) &&
      ![CLOUDFLARE_R2, AWS_S3_GLACIER, QUICKBOOKS].includes(x)
  ),
  recentSkills,
  experience: [
    {
      position: 'Software Engineer',
      company: 'Strategic Systems International',
      location: 'Lahore',
      from: '2019-06-17',
      to: '2021-11-26',
      accomplishments: [
        'Worked on a complex application to process and display sensors data from multiple machines on a comprehensive dashboard, leveraging Redis cache, InfluxDB, and Elasticsearch to optimize data storage and enable real-time analysis and visualization',
        `Migrated services from REST API to Apache ${TechSkillsEnum.KAFKA} for inter-service communication`
      ],
      skills: [
        DOT_NET_CORE,
        ANGULAR,
        C_SHARP,
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
      company: 'Qureos',
      location: 'Remote',
      from: '2021-12-01',
      to: '2022-10-22',
      accomplishments: [
        `Successfully deployed a Stripe API-based subscription and purchase system, delivering an efficient and user-friendly payment infrastructure for customers`,
        `Implemented chat features from the ground up using ${TechSkillsEnum.FIREBASE} and ${TechSkillsEnum.REACT}, which eased communication and drove engagement`,
        'Identified and highlighted the impact of technical debt to management, leading to a long term road map to resolution',
        'Resolved performance bottleneck issues, improved app loading speed by 50%',
        'Documented and peer reviewed best practices for front and backend development, thus ensuring consistent coding standards',
        `Migrated application from ${TechSkillsEnum.NODE_JS} to ${TechSkillsEnum.NEST_JS}, leading to faster development and improved architecture`
      ],
      skills: [
        TYPESCRIPT,
        REACT,
        TAILWIND_CSS,
        NEST_JS,
        NEXT_JS,
        NODE_JS,
        FIREBASE,
        MONGO_DB
      ]
    },
    {
      position: 'Software Engineer',
      company: 'Integrate',
      location: 'Remote',
      from: '2022-11-29',
      to: '',
      accomplishments: [
        `Took charge of full-stack responsibilities. Played a pivotal role by leading feature development initiatives, integrating multi-user support with role-based authentication, and implementing scalable chat functionality.`,
        `The result was a notable boost in user engagement and daily active logins, as users embraced the portal for streamlined communication, thus reducing reliance on email correspondence.`
      ],
      skills: [DOT_NET_CORE, C_SHARP, FIREBASE, MY_SQL]
    }
  ],
  education: [
    {
      institution: 'NUCES (FAST-NU)',
      degreeType: 'BS Computer Science',
      from: '2015-08-15',
      to: '2019-06-01',
      location: 'Lahore'
    }
  ],
  interests: Object.values(InterestsEnum)
}

// serverless function
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResumeDataDto>
) {
  res.status(200).json(getResumeData())
}

export const getResumeData = () => data
