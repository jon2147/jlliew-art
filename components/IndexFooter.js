import styles from './ContentWithFooter.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function IndexFooter({ children }) {

    const router = useRouter();
    const { section } = router.query;

    return (
        <footer className={styles.footer}>
            <img id="workImage" className={section === "work" ? styles.footerImage : styles.footerImageHidden}
                style={section === "work" ? { zIndex: "-9" } : { zIndex: "-1" }}
                src='/images/meduso_bg.jpg'
            />
            <img id="sketchbookImage" className={section === "sketchbook" ? styles.footerImage : styles.footerImageHidden}
                style={section === "sketchbook" ? { zIndex: "-9" } : { zIndex: "-1" }}
                src='/images/bed_bg.jpg'
            />
            <img id="personalImage" className={section === "personal" ? styles.footerImage : styles.footerImageHidden}
                style={section === "personal" ? { zIndex: "-9" } : { zIndex: "-1" }}
                src='/images/wtsr_bg.jpg'
            />
            <img id="aboutImage" className={section === "about" ? styles.footerImage : styles.footerImageHidden}
                style={section === "about" ? { zIndex: "-9" } : { zIndex: "-1" }}
                src='/images/morpheus_bg.jpg'
            />

            {/* This would be a good place to have a different component for the footer */}
            <div className={styles.indexNav}>
                <div className={styles.navLinks}>
                    <Link href="/work">
                        <a
                            onMouseOver={section === "work" ? null : () => {
                                let hoverImage = document.getElementById("workImage");
                                hoverImage.className = styles.footerImage;
                            }}
                            onMouseLeave={section === "work" ? null : () => {
                                let hoverImage = document.getElementById("workImage");
                                hoverImage.className = styles.footerImageHidden;
                            }}
                            className={section === "work" ? styles.navLinkActive : styles.navLink}>Work</a>
                    </Link>
                    <Link href="/sketchbook">
                        <a
                            onMouseOver={section === "sketchbook" ? null : () => {
                                let hoverImage = document.getElementById("sketchbookImage");
                                hoverImage.className = styles.footerImage;
                            }}
                            onMouseLeave={section === "sketchbook" ? null : () => {
                                let hoverImage = document.getElementById("sketchbookImage");
                                hoverImage.className = styles.footerImageHidden;
                            }}
                            className={section === "sketchbook" ? styles.navLinkActive : styles.navLink}>Sketchbook</a>
                    </Link>
                    <Link href="/personal">
                        <a
                            onMouseOver={section === "personal" ? null : () => {
                                let hoverImage = document.getElementById("personalImage");
                                hoverImage.className = styles.footerImage;
                            }}
                            onMouseLeave={section === "personal" ? null : () => {
                                let hoverImage = document.getElementById("personalImage");
                                hoverImage.className = styles.footerImageHidden;
                            }}
                            className={section === "personal" ? styles.navLinkActive : styles.navLink}>Personal</a>
                    </Link>
                    <Link href="/about">
                        <a
                            onMouseOver={section === "about" ? null : () => {
                                let hoverImage = document.getElementById("aboutImage");
                                hoverImage.className = styles.footerImage;
                            }}
                            onMouseLeave={section === "about" ? null : () => {
                                let hoverImage = document.getElementById("aboutImage");
                                hoverImage.className = styles.footerImageHidden;
                            }}
                            className={section === "about" ? styles.navLinkActive : styles.navLink}>About</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}