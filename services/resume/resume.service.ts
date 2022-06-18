import useSWR from 'swr'
import { ResumeDataDto } from '../../pages/api/resume'
import { fetcher, ResponseDto } from '../base.service'

export interface ResumeDto extends ResponseDto {
  resumeData: ResumeDataDto
}

export const useResume = () => {
  const { data, error } = useSWR(`/api/resume`, fetcher)

  return {
    resumeData: data as ResumeDataDto,
    isLoading: !error && !data,
    isError: error
  } as ResumeDto
}
