import { useRouter } from 'next/router'
import styles from '../../components/WorkbookEntry.module.css';
import Link from 'next/link'
import Head from 'next/head'
import { workItems } from '../../sections/works'



import IndexNavigation from '../../components/IndexNavigation';
import WorkbookEntryNavigation from '../../components/WorkbookEntryNavigation';

export async function getStaticPaths() {

    let workKeys = Object.keys(workItems);


    let paths = workKeys.map(key => {
        return {
            params: { work: key },
        }
    })

    return {
        paths, fallback: false
    }

}

export async function getStaticProps({ params }) {

    let work = workItems[params.work]

    return {
        props: { work }
    }

}


export default function Work({ work }) {


    return <>

        <Head>
            <title>{work.projectTitle + " - Jonathan Liew"}</title>
        </Head>
        <div className={styles.bufferedContentContainer}>
            <IndexNavigation /> {/* This would be the same for e.g. a personal project page, with background set to the project's */}


            <div className={styles.entryContainer}>
                <div className={styles.carousel}>
                    <div className={styles.carouselCell}>
                        <img className={styles.cellContent}
                            src={work.projectImages[0].imageURL} alt={work.imageAlt} />
                    </div>
                </div>


                <div className={styles.didactic}>
                    <h1 className={styles.entryTitle}>{work.projectTitle}</h1>
                    <h2 className={styles.entrySubtitle}>{work.projectSubtitle}</h2>
                    <div className={styles.entryDescription}  dangerouslySetInnerHTML={{ __html: work.projectDescription }}></div>
                    <WorkbookEntryNavigation />
            </div>

            
            </div>
        </div>
    </>
}