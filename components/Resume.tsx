import { useResume } from '../services/resume/resume.service'
import Loader from './misc/Loader/loader'
import Image from 'next/image'
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'

const Resume = () => {
  const { resumeData, isLoading, isError } = useResume()

  return isLoading ? (
    <Loader></Loader>
  ) : isError ? (
    <div>An error has occurred during loading data</div>
  ) : (
    <div className="root">
      <div className="flex">
        <div className="flex-col basis-1/3 flex-none p-4 border border-black rounded">
          <div className="flex-row">
            <img src="https://picsum.photos/200/" className="rounded-full" />
          </div>
          <div className="flex-row prose mt-8">
            <h3>Contact</h3>
            <div className="flex-row">
              <PhoneIcon className="w-6 h-6 inline mr-4"></PhoneIcon>
              <a>+92 310 4270920</a>
            </div>
            <div className="flex-row">
              <MailIcon className="w-6 h-6 inline mr-4"></MailIcon>
              <a>sulsk24@gmail.com</a>
            </div>
            <div className="flex-row">
              <LocationMarkerIcon className="w-6 h-6 inline mr-4"></LocationMarkerIcon>
              <a>Lahore, Pakistan</a>
            </div>
          </div>
          <div className="flex-row prose mt-8">
            <h3>Education</h3>
          </div>
          <div className="flex-row prose mt-8">
            <h3>Skills</h3>
            {/* <Image
              src="/../public/icons/typescript.svg"
              width="30"
              height="30"
            /> */}
          </div>
          <div className="flex-row prose mt-8">
            <h3>Interests</h3>
          </div>
        </div>
        <div className="flex-col p-4 basis-2/3 border border-black rounded">
          <div className="flex-row prose">
            <h1 className="mb-1">{resumeData.name}</h1>
            <h2 className="mt-0">{resumeData.title}</h2>
          </div>
          <div className="flex-row prose">
            <h3>About</h3>
            <div>{resumeData.about}</div>
          </div>
          <div className="flex-row">Work Experience</div>
        </div>
      </div>
    </div>
  )
}
export default Resume
