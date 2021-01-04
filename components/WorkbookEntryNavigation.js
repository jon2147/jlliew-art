import styles from './WorkbookEntryNavigation.module.css'; // create a separate module for each component; avoid grouping if possible
import Link from 'next/link'
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';


export default function WorkbookEntryNavigation({nextWork, previousWork}) {
    return (
        <div className={styles.entryNavigation}>
            <Link href={"/work" + previousWork.projectURL}>
                <a className={styles.navigationLink}>
                    <ArrowBack className={styles.navigationLinkIcon} />
                    <span className={styles.navigationLinkText}>{previousWork.projectTitle}</span>
                </a>
            </Link>
            <Link href={"/work" + nextWork.projectURL}>
                <a className={styles.navigationLink}>
                    <ArrowForward className={styles.navigationLinkIcon} />
                    <span className={styles.navigationLinkText}>{nextWork.projectTitle}</span>
                </a>
            </Link>
        </div>
    )
}