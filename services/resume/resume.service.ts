import useSWR from 'swr'
import { ResumeDataDto } from '../../pages/api/dto'
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

export const getResume = async () => {
  const data = await fetcher(`/api/resume`)
  return data as ResumeDataDto
}
