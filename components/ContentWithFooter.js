import styles from './ContentWithFooter.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function ContentWithFooter({ children }) {

    const router = useRouter();

    return (
        <div className={styles.footerStack}>
            <div className={styles.bufferedContentContainer}>
                <div className={styles.contentContainer}>
                    <main className={styles.mainContent}>{children}</main>
                </div>
                <div className={styles.footerTransition} />
                <div className={styles.footerBuffer} />
            </div>
            <footer className={styles.footer}>
                <img className={styles.footerImage} src='/images/morpheus_bg.jpg' />
                {/* This would be a good place to have a different component for the footer */}
                <div className={styles.indexNav}>
                    <div className={styles.navLinks}>
                        <Link href="/work">
                            <a className={router.query === "/work" ? styles.navLinkActive : styles.navLink}>Work</a>
                        </Link>
                        <Link href="/personal">
                            <a className={router.pathname === "/personal" ? styles.navLinkActive : styles.navLink}>Personal</a>
                        </Link>
                        <Link href="/sketchbook">
                            <a className={router.pathname === "/sketchbook" ? styles.navLinkActive : styles.navLink}>Sketchbook</a>
                        </Link>
                        <Link href="/about">
                            <a className={router.pathname === "/about" ? styles.navLinkActive : styles.navLink}>About</a>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}