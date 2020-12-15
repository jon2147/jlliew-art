import Head from 'next/head'
import ContentWithFooter from '../components/ContentWithFooter'
import PlaceholderContent from '../components/PlaceholderContent'
import styles from '../styles/Home.module.css'
import FloatingNavBar from '../components/FloatingNavBar'
import FadedContent from '../components/FadedContent'
import SectionBackground from '../components/SectionBackground'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonathan Liew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bufferedContentContainer}>
        <FloatingNavBar />
        <FadedContent />
        <SectionBackground />
      </div>
    </div>
  )
}
