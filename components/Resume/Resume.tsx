import clsx from 'clsx'
import { getFormattedDate } from 'utils/date'
import { useResume } from '../../services/resume/resume.service'
import Loader from '../misc/Loader/loader'
import { IconMapping } from './IconMapping'
import Image from 'next/image'
import BoldKeywords from './Bold'
import { TechSkillsEnum } from 'types'

const Resume = () => {
  const { resumeData, isLoading, isError } = useResume()

  return isLoading ? (
    <Loader></Loader>
  ) : isError ? (
    <div>An error has occurred during loading data</div>
  ) : (
    <div className="root h-full">
      <div className="flex h-full">
        <div className="flex flex-col gap-6 basis-1/5 p-4">
          <div className="flex flex-col gap-2 mt-[140px]">
            <div className="sub-heading">Skills</div>
            <div className="flex-col">
              {resumeData.skills.map(skill => (
                <div className="flex basis-1/2 gap-2 mb-1" key={skill}>
                  <IconMapping
                    iconType={skill}
                    className="w-4 h-4 my-auto inline"
                  />
                  <span className="text-tiny">{skill}</span>
                </div>
              ))}
            </div>
          </div>{' '}
          <div className="flex-row">
            <div className="flex flex-col gap-4">
              <div className="sub-heading">Education</div>
              {resumeData.education.map((education, index) => {
                return (
                  <div key={education.degreeType}>
                    <div className={clsx(['font-medium text-tiny'])}>
                      {education.degreeType}
                    </div>
                    <div className="flex-row text-sm">
                      {education.institution}
                    </div>
                    <div className="flex flex-col justify-between italic">
                      <span>
                        <span className="text-sm">
                          {getFormattedDate(education.from)} -{' '}
                          {getFormattedDate(education.to)}
                        </span>
                      </span>
                      <span className="text-sm">{education.location}</span>
                    </div>
                    {index < resumeData.education.length - 1 && (
                      <div className="mt-3 line-hr" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          {/* <div className="flex-row">
            <div className="flex flex-col gap-2">
              <div className="sub-heading">Interests</div>
              <div className="flex flex-col gap-1">
                {resumeData.interests.map(interest => (
                  <div className="flex gap-2" key={interest}>
                    <IconMapping
                      iconType={interest}
                      className="w-4 h-4 my-auto inline"
                    />
                    <span className="text-tiny">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col basis-4/5 p-4">
          <div className="flex-row">
            <span className="mb-1 text-5xl font-bold">
              {resumeData.firstName + '   '}
            </span>
            <span className="mb-1 text-5xl font-bold text-purple-main">
              {resumeData.lastName}
            </span>
            <div className="mt-0 text-3xl">{resumeData.title}</div>
          </div>
          <div className="flex-row mt-6">
            <div className="sub-heading">About</div>
            <div className="text-tiny">{resumeData.about}</div>
          </div>
          <div className="flex-row mt-6">
            <div className="flex flex-col gap-2">
              <div className="sub-heading">Work Experience</div>
              <div className="flex flex-col gap-4">
                {resumeData.experience
                  .sort((one, two) => (one.from < two.from ? 1 : -1))
                  .map((experience, index) => {
                    return (
                      <div className="flex flex-col" key={experience.company}>
                        <div className="flex-row text-lg font-semibold mt-0">
                          {experience.position}
                        </div>
                        <div className="flex-row text-tiny">
                          {experience.company}
                        </div>
                        <div className="flex flex-row mb-2 justify-between text-sm italic font-light">
                          <span>
                            {getFormattedDate(experience.from)} -{' '}
                            {getFormattedDate(experience.to)}
                          </span>
                          <span>{experience.location}</span>
                        </div>
                        {experience.accomplishments.map(accomplishment => (
                          <div key={accomplishment.substring(0, 30)}>
                            <IconMapping
                              iconType="right-arrow"
                              className="ml-[-4px] mr-1 w-4 h-4 my-auto inline"
                            />
                            <span className="text-tiny">
                              <BoldKeywords
                                str={accomplishment}
                                keywords={Object.values(
                                  TechSkillsEnum
                                )}></BoldKeywords>
                            </span>
                          </div>
                        ))}
                        {/* <div className="flex flex-row mt-3 justify-start flex-wrap">
                          {experience.skills.map(skill => (
                            <IconMapping
                              key={skill}
                              iconType={skill}
                              className="w-5 h-5 my-auto mx-1 inline"
                            />
                          ))}
                        </div> */}
                        {index < resumeData.experience.length - 1 && (
                          <hr className="mt-3 line-hr" />
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Resume
