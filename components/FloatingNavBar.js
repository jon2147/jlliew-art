
import Launch from '@material-ui/icons/Launch';
import styles from './FloatingNavBar.module.css';
import Link from 'next/link'

export default function FloatingNavBar() {
    return <>

        <div className={styles.bar}>
            {/*
            <MenuIcon className={styles.menuIcon} />
            
            <Link href="/">
                <a className={styles.homeLink}>Jonathan Liew</a>
            </Link>
            */}

            <div className={styles.left}>
                {/* This would pull from a file which exports these link details (distinct from 'sections.js') */}
                <Link href="/work"> 
                    <a className={styles.barLink}>Work</a>
                </Link>
                <Link href="/sketchbook">
                    <a className={styles.barLink}>Sketchbook</a>
                </Link>
                <Link href="/personal">
                    <a className={styles.barLink}>Personal</a>
                </Link>
            </div>
            <Link href="/">
                <a>
                    <img src="/images/mrossary.svg" className={styles.logo} />
                </a>
            </Link>
            <div className={styles.right}>
                <Link href="/about">
                    <a className={styles.barLink}>About</a>
                </Link>
                <Link href="/contact">
                    <a className={styles.barLink}>Contact</a>
                </Link>
                <Link href="https://jlliew.com">
                    <a target="_blank" rel="noopener noreferrer" className={styles.barLinkExternal}>Design<Launch className={styles.barLinkExternalIcon}/></a>
                </Link>
            </div>
        </div>
    </>
}