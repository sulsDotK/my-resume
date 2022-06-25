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
        <div className="flex flex-col gap-4 basis-1/3 p-4 bg-gradient-to-r from-indigo-200">
          <div className="flex flex-row justify-center ">
            <img src={resumeData.photoUrl} className="rounded-full" />
          </div>
          <div className="flex-row mt-4">
            <div className="sub-heading">Contact</div>
            <>
              {resumeData.contactInfo.map(({ name, value }) => (
                <div className="flex flex-row gap-2" key={name}>
                  <IconMapping iconType={name} className="w-4 h-4 inline" />
                  <a className="text-tiny">{value}</a>
                </div>
              ))}
            </>
          </div>
          <div className="flex-row mt-4">
            <div className="sub-heading">Skills</div>
            <div className="flex">
              <div className="flex flex-wrap">
                {resumeData.skills.map(skill => (
                  <div className="flex basis-1/2 gap-2" key={skill}>
                    <IconMapping
                      iconType={skill}
                      className="w-4 h-4 my-auto inline"
                    />
                    <span className="text-tiny">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-row mt-4">
            <div className="sub-heading">Education</div>
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
          <div className="flex-row mt-4">
            <div className="sub-heading">Interests</div>
            <div className="flex flex-col gap-1">
              {resumeData.interests.map(interest => (
                <div className="flex gap-2" key={interest}>
                  {/* <div className="flex-col gap-4"></div> */}
                  <IconMapping
                    iconType={interest}
                    className="w-4 h-4 my-auto inline"
                  />
                  <span className="text-tiny">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-2/3 p-4">
          <div className="flex-row">
            <h1 className="mb-1 text-4xl font-black">{resumeData.name}</h1>
            <h2 className="mt-0 text-2xl font-medium">{resumeData.title}</h2>
          </div>
          <div className="flex-row mt-8">
            <div className="sub-heading">About</div>
            <div className="text-sm">{resumeData.about}</div>
          </div>
          <div className="flex-row mt-8">
            <div className="sub-heading">Work Experience</div>
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
                    {experience.accomplishments.map(accomplishment => (
                      <div>
                        <>
                          className="text-sm"
                          key={accomplishment.substring(0, 30)}>
                          {accomplishment}
                        </>
                      </div>
                    ))}
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
