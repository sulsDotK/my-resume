import clsx from 'clsx'
import { getFormattedDate } from 'utils/date'
import { useResume } from '../../services/resume/resume.service'
import Loader from '../misc/Loader/loader'
import { IconMapping } from './IconMapping'

const Resume = () => {
  const { resumeData, isLoading, isError } = useResume()

  return isLoading ? (
    <Loader></Loader>
  ) : isError ? (
    <div>An error has occurred during loading data</div>
  ) : (
    <div className="root h-full">
      <div className="flex h-full">
        <div className="flex flex-col basis-1/3 p-4 bg-pale-yellow-1">
          <div className="flex flex-row justify-center">
            <img src={resumeData.photoUrl} className="rounded-full" />
          </div>
          <div className="flex-row prose mt-4">
            <h3>Contact</h3>
            <>
              {resumeData.contactInfo.map(({ name, value }) => (
                <div className="flex flex-row gap-2" key={name}>
                  <IconMapping iconType={name} className="w-6 h-6 inline" />
                  <a>{value}</a>
                </div>
              ))}
            </>
          </div>
          <div className="flex-row prose mt-4">
            <h3>Skills</h3>
            <div className="flex">
              <div className="flex flex-wrap">
                {resumeData.skills.map(skill => (
                  <div className="flex basis-1/2 gap-2" key={skill}>
                    <IconMapping
                      iconType={skill}
                      className="w-4 h-4 my-auto inline"
                    />
                    <span className="text-md">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-row prose mt-4">
            <h3>Education</h3>
            <div>
              {resumeData.education.map((education, index) => {
                return (
                  <div className="flex flex-col" key={education.degreeType}>
                    <h4
                      className={clsx([
                        'flex-row',
                        index > 0 ? 'mt-2' : 'mt-0'
                      ])}>
                      {education.degreeType}
                    </h4>
                    <div className="flex-row text-base">
                      {education.institution}
                    </div>
                    <div className="flex flex-row justify-between">
                      <span className="flex-col">
                        <span className="text-sm">
                          {getFormattedDate(education.from)} -{' '}
                          {getFormattedDate(education.to)}
                        </span>
                      </span>
                      <span className="flex-col text-sm">
                        {education.location}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex-row prose mt-4">
            <h3>Interests</h3>
            <ul>
              {resumeData.interests.map(interest => (
                <div className="text-base" key={interest}>
                  {interest}
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-col basis-2/3 p-4 bg-pale-yellow-2">
          <div className="flex-row prose">
            <h1 className="mb-1">{resumeData.name}</h1>
            <h2 className="mt-0">{resumeData.title}</h2>
          </div>
          <div className="flex-row prose mt-8">
            <h3>About</h3>
            <div className="text-sm">{resumeData.about}</div>
          </div>
          <div className="flex-row prose mt-8">
            <h3>Work Experience</h3>
            <div>
              {resumeData.experience.map(experience => {
                return (
                  <div className="flex flex-col" key={experience.company}>
                    <h4 className="flex-row mt-0">{experience.position}</h4>
                    <div className="flex-row">{experience.company}</div>
                    <div className="flex flex-row justify-between">
                      <span className="flex-col">
                        {getFormattedDate(experience.from)}
                      </span>
                      <span className="flex-col">{experience.location}</span>
                    </div>
                    <ul>
                      {experience.accomplishments.map(accomplishment => (
                        <li
                          className="text-sm"
                          key={accomplishment.substring(0, 30)}>
                          {accomplishment}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Resume
