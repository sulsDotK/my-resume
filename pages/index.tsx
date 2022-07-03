import Page from '../components/Page'
import Resume from '../components/Resume/Resume'
import { RecoilRoot } from 'recoil'
import { getResume } from 'services/resume/resume.service'
import { SWRConfig } from 'swr'

interface Props {
  fallback: { [key: string]: any }
}

export default function Home({ fallback }: Props) {
  return (
    <>
      <RecoilRoot>
        <Page>
          <SWRConfig value={{ fallback }}>
            <Resume></Resume>
          </SWRConfig>
        </Page>
      </RecoilRoot>
    </>
  )
}

export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const resumeData = await getResume()
  return {
    props: {
      fallback: {
        '/api/resume': resumeData
      }
    }
  }
}
