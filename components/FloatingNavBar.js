
import MenuIcon from '@material-ui/icons/Menu';
import styles from './FloatingNavBar.module.css';

export default function FloatingNavBar() {
    return <>

        <div className={styles.bar}>
            <MenuIcon className={styles.menuIcon} />
            <span className={styles.homeLink}>Jonathan Liew</span>
        </div>
    </>
}