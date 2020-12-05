
import MenuIcon from '@material-ui/icons/Menu';
import styles from './FloatingNavBar.module.css';
import Link from 'next/link'

export default function FloatingNavBar() {
    return <>

        <div className={styles.bar}>
            <MenuIcon className={styles.menuIcon} />
            <Link href="/">
                <a className={styles.homeLink}>Jonathan Liew</a>
            </Link>
        </div>
    </>
}