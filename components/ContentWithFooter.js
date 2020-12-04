import styles from './ContentWithFooter.module.css'

export default function ContentWithFooter({ children }) {
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
                        <span class={styles.navLink}>Work</span>
                        <span class={styles.navLink}>Personal</span>
                        <span class={styles.navLink}>Sketchbook</span>
                        <span class={styles.navLink}>About</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}