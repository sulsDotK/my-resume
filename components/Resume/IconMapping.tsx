import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import TypeScriptIcon from '@icons/tailwind-css.svg'
import ReactIcon from '@icons/react.svg'
import AngularIcon from '@icons/angular.svg'
import CSharpIcon from '@icons/c-sharp.svg'
import CssIcon from '@icons/css-3.svg'
import DockerIcon from '@icons/docker.svg'
import DotNetCoreIcon from '@icons/dot-net-core.svg'
import FirebaseIcon from '@icons/firebase.svg'
import HtmlIcon from '@icons/html.svg'
import MongoDbIcon from '@icons/mongodb.svg'
import MySqlIcon from '@icons/mysql.svg'
import NextJsIcon from '@icons/next-js.svg'
import NodeJsIcon from '@icons/node-js.svg'
import PostgreSqlIcon from '@icons/postgresql.svg'
import RedisIcon from '@icons/redis.svg'
import TailwindIcon from '@icons/tailwind-css.svg'
import ProgrammingIcon from '@icons/programming.svg'
import ProblemSolvingIcon from '@icons/problem_solving.svg'
import GamingIcon from '@icons/gaming.svg'
import CricketIcon from '@icons/cricket.svg'
import BadmintonIcon from '@icons/badminton.svg'
import {
  ContactTypeEnum,
  InterestsEnum,
  TechSkillsEnum
} from './../../types/index'

export interface IconMappingProps {
  iconType: string
  className: string
}

export const IconMapping: React.FC<IconMappingProps> = ({
  iconType,
  className
}: IconMappingProps) => {
  // tech skills
  switch (iconType) {
    case TechSkillsEnum.TYPESCRIPT:
      return <TypeScriptIcon className={className} />
    case TechSkillsEnum.REACT:
      return <ReactIcon className={className} />
    case TechSkillsEnum.ANGULAR:
      return <AngularIcon className={className} />
    case TechSkillsEnum.C_SHARP:
      return <CSharpIcon className={className} />
    case TechSkillsEnum.CSS:
      return <CssIcon className={className} />
    case TechSkillsEnum.DOCKER:
      return <DockerIcon className={className} />
    case TechSkillsEnum.DOT_NET_CORE:
      return <DotNetCoreIcon className={className} />
    case TechSkillsEnum.FIREBASE:
      return <FirebaseIcon className={className} />
    case TechSkillsEnum.HTML:
      return <HtmlIcon className={className} />
    case TechSkillsEnum.MONGO_DB:
      return <MongoDbIcon className={className} />
    case TechSkillsEnum.MY_SQL:
      return <MySqlIcon className={className} />
    case TechSkillsEnum.NEXT_JS:
      return <NextJsIcon className={className} />
    case TechSkillsEnum.NODE_JS:
      return <NodeJsIcon className={className} />
    case TechSkillsEnum.POSTGRE_SQL:
      return <PostgreSqlIcon className={className} />
    case TechSkillsEnum.REDIS:
      return <RedisIcon className={className} />
    case TechSkillsEnum.TAILWIND:
      return <TailwindIcon className={className} />
  }

  // contact types
  switch (iconType) {
    case ContactTypeEnum.PHONE:
      return <PhoneIcon className={className} />
    case ContactTypeEnum.EMAIL:
      return <MailIcon className={className} />
    case ContactTypeEnum.LOCATION:
      return <LocationMarkerIcon className={className} />
  }

  // interest
  switch (iconType) {
    case InterestsEnum.PROGRAMMING:
      return <ProgrammingIcon className={className} />
    case InterestsEnum.PROBLEM_SOLVING:
      return <ProblemSolvingIcon className={className} />
    case InterestsEnum.GAMING:
      return <GamingIcon className={className} />
    case InterestsEnum.BADMINTON:
      return <BadmintonIcon className={className} />
    case InterestsEnum.CRICKET:
      return <CricketIcon className={className} />
    default:
      return <div></div>
  }
}
