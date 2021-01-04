import { useRouter } from 'next/router'
import styles from '../../components/WorkbookEntry.module.css';
import Link from 'next/link'
import Head from 'next/head'
import { workItems } from '../../sections/works'

import IndexNavigation from '../../components/IndexNavigation';
import WorkbookEntryNavigation from '../../components/WorkbookEntryNavigation';
import CarouselNavigation from '../../components/CarouselNavigation';

const workKeys = Object.keys(workItems);

export async function getStaticPaths() {

    let paths = workKeys.map(key => {
        return {
            params: {
                work: key
            }
        }
    })

    console.log(paths)

    return {
        paths, fallback: false
    }

}

export async function getStaticProps({ params }) {

    let work = workItems[params.work];
    let workIndex = workKeys.indexOf(params.work);
    let ultimateIndex = workKeys.length - 1;

    let nextIndex = workIndex === ultimateIndex ?
        0 : workIndex + 1;
    let previousIndex = workIndex === 0 ?
        ultimateIndex : workIndex - 1;

    let nextWork = workItems[workKeys[nextIndex]];
    let previousWork = workItems[workKeys[previousIndex]];

    console.log(workKeys)

    return {
        props: { work, nextWork, previousWork }
    }

}


export default function Work({ work, nextWork, previousWork }) {

    return <>

        <Head>
            <title>{work.projectTitle + " - Jonathan Liew"}</title>
        </Head>
        <div className={styles.bufferedContentContainer}>
            <IndexNavigation /> {/* This would be the same for e.g. a personal project page, with background set to the project's */}



        </div>
        <div className={styles.entryContainer}>
            <div className={styles.carousel}>
                <div className={styles.carouselCell}>
                    <img className={styles.cellContent}
                        src={work.projectImages[0].imageURL} alt={work.imageAlt} />
                </div>
                <CarouselNavigation/>
            </div>


            <div className={styles.didactic}>
                <h1 className={styles.entryTitle}>{work.projectTitle}</h1>
                <h2 className={styles.entrySubtitle}>{work.projectSubtitle}</h2>
                <div className={styles.entryDescription} dangerouslySetInnerHTML={{ __html: work.projectDescription }}></div>
                <WorkbookEntryNavigation nextWork={nextWork} previousWork={previousWork} />
            </div>


        </div>
    </>
}