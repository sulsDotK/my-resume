import useSWR from 'swr'
import { useResume } from '../services/resume/resume.service'
import Loader from './misc/Loader/loader'

const Resume = () => {
  const { resumeData, isLoading, isError } = useResume()

  return isLoading ? (
    <Loader></Loader>
  ) : isError ? (
    <div>An error has occurred during loading data</div>
  ) : (
    <div className="root prose">
      <div className="flex flex-row justify-between">
        <div className="flex- left-section grow-0">
          <div className="flex-row grow-0">profile-picture</div>
          <div className="flex-row">contact-info</div>
          <div className="flex-row">contact-info</div>
          <div className="flex-row">skills</div>
          <div className="flex-row">interests</div>
        </div>
        <div className="flex-col right-section">
          <div className="flex-row">Name and title</div>
          <div className="flex-row">About</div>
          <div className="flex-row">Work Experience</div>
        </div>
      </div>
    </div>
  )
}
export default Resume
