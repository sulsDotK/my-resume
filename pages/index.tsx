import type { NextPage } from 'next'
import Page from '../components/Page'
import Resume from '../components/Resume'
import { RecoilRoot } from 'recoil'

const Home: NextPage = () => {
  return (
    <>
      <RecoilRoot>
        <Page>
          <Resume></Resume>
        </Page>
      </RecoilRoot>
    </>
  )
}

export default Home
