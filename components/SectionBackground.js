import styles from './ContentWithFooter.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { sectionsData } from '../sections/sections'

export default function SectionBackground({ background }) {

    const router = useRouter();
    const { section } = router.query;

    return (
        <>
            <div className={styles.sectionBackground}>
                <img id="WorkImage" className={styles.footerImageHidden}
                    style={section === 'work' ? { zIndex: "-9" } : { zIndex: "-1" }}
                    src='/images/meduso_bg.jpg'
                />
                <img id="SketchbookImage" className={styles.footerImageHidden}
                    style={section === 'sketchbook' ? { zIndex: "-9" } : { zIndex: "-1" }}

                    src='/images/bed_bg.jpg'
                />
                <img id="PersonalImage" className={styles.footerImageHidden}
                    style={section === 'personal' ? { zIndex: "-9" } : { zIndex: "-1" }}

                    src='/images/wtsr_bg.jpg'
                />
                <img id="AboutImage" className={styles.footerImageHidden}
                    style={section === 'about' ? { zIndex: "-9" } : { zIndex: "-1" }}

                    src='/images/morpheus_bg.jpg'
                />
                <img className={styles.backgroundImage} src={background} style={{ zIndex: "-8" }}></img>
            </div>
        </>
    )
}