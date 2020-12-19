
import styles from './IndexNavigation.module.css';
import Launch from '@material-ui/icons/Launch';
import Link from 'next/link'
import { useRouter } from 'next/router';


import { indexSections } from '../sections/sections'

export default function IndexNavigation({ background }) {

    const router = useRouter();
    const { section } = router.query;

    return <>

        <div className={styles.bar}>
            {indexSections.map((obj) => {
                return <Link key={"keyfor" + obj.title} href={obj.url}>
                    <a className={("/" + section) === obj.url ? styles.barLinkActive : obj.isExternal ? styles.barLinkExternal : styles.barLink}


                        onMouseOver={
                            obj.isExternal ? null :
                                ("/" + section) === obj.url ?
                                    () => {
                                        let hoverImage = document.getElementById("hoverImage");
                                        if (hoverImage) hoverImage.className = styles.footerImageHidden
                                    }
                                    :
                                    () => {
                                        let hoverImage = document.getElementById("hoverImage");
                                        if (hoverImage) {
                                            hoverImage.className = styles.footerImage;
                                            hoverImage.src = obj.imageURL;
                                        }
                                    }
                        }

                        onMouseLeave={
                            obj.isExternal ? null :
                                ("/" + section) === obj.url ? null : () => {
                                    let hoverImage = document.getElementById("hoverImage");
                                    if (hoverImage) hoverImage.className = styles.footerImageHidden;
                                }
                        }

                        target={obj.isExternal ? "_blank" : ""} rel={obj.isExternal ? "noopener noreferrer" : ""}
                    >
                        {obj.title} {obj.isExternal ? <Launch className={styles.barLinkExternalIcon} /> : ""}
                    </a>
                </Link>;
            })}
        </div>
        <div className={styles.sectionBackground}>
            {/* 
            <img id="WorkImage" className={section === 'work' ? styles.footerImage : styles.footerImageHidden}

                src='/images/temp.png'
            />
            <img id="SketchbookImage" className={section === 'sketchbook' ? styles.footerImage : styles.footerImageHidden}


                src='/images/bed_bg.jpg'
            />
            <img id="PersonalImage" className={section === 'personal' ? styles.footerImage : styles.footerImageHidden}


                src='/images/wtsr_bg.jpg'
            />
            <img id="AboutImage" className={section === 'about' ? styles.footerImage : styles.footerImageHidden}


                src='/images/morpheus_bg.jpg'
            />
            <img id="ContactImage" className={section === 'contact' ? styles.footerImage : styles.footerImageHidden}


                src='/images/meduso_bg.jpg'
            />*/}
            <img id="hoverImage" className={styles.footerImageHidden} src={background ? background : '/images/temp.png'}></img>

            <img className={styles.backgroundImage} src={background ? background : '/images/temp.png'} style={{ zIndex: "-8" }}></img>
        </div>
    </>
}