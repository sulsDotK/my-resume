import moment from 'moment'

export const getFormattedDate = (dateStr: string): string => {
  console.log(dateStr)
  const date = new Date(dateStr)
  const momentTime = moment(date.getTime())
  return momentTime.format('MMM YYYY')
}
