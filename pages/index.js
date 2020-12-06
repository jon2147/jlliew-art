import Head from 'next/head'
import ContentWithFooter from '../components/ContentWithFooter'
import PlaceholderContent from '../components/PlaceholderContent'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonathan Liew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWithFooter>
        <PlaceholderContent/> {/* This is where index content would go, presuming it would be contained in contentwithfooter - which it really shouldnt */}
      </ContentWithFooter>
    </div>
  )
}
