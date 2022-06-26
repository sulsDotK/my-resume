import moment from 'moment'

export const getFormattedDate = (dateStr: string): string => {
  if (!dateStr) {
    return 'Present'
  }
  const date = new Date(dateStr)
  const momentTime = moment(date.getTime())
  return momentTime.format('MMM YYYY')
}
