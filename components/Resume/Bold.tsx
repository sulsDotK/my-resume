export interface Props {
  str: string
  keywords: string[]
}

const BoldKeywords = ({ str, keywords }: Props) => {
  let res = str
  for (const c of keywords)
    res = res.replace(c, `<span class="font-bold">${c}</span>`)

  return (
    <span
      className="text-tiny"
      dangerouslySetInnerHTML={{ __html: res }}></span>
  )
}

export default BoldKeywords
