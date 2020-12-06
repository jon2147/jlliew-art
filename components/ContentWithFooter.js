import styles from './ContentWithFooter.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';
import IndexFooter from './IndexFooter';
import FloatingNavBar from '../components/FloatingNavBar';


export default function ContentWithFooter({ children }) {

    return (

        <>
            <FloatingNavBar />

            <div className={styles.footerStack}>
                <div className={styles.bufferedContentContainer}>
                    <div className={styles.contentContainer}>
                        <main className={styles.mainContent}>{children}</main>
                    </div>
                    <div className={styles.footerTransition} />
                    <div className={styles.footerBuffer} />
                </div>
                <IndexFooter />
            </div>
        </>
    )
}