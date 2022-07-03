import Page from '../components/Page'
import Resume from '../components/Resume/Resume'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'
import { getResumeData } from './api/resume'

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

/*
Fails to build as next api routes are not available during build time
You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
*/

export function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const resumeData = getResumeData()
  return {
    props: {
      fallback: {
        '/api/resume': resumeData
      }
    }
  }
}
