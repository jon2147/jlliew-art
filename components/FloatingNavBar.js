
import Launch from '@material-ui/icons/Launch';
import styles from './FloatingNavBar.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles2 from './ContentWithFooter.module.css';



import { leftSections, rightSections } from '../sections/sections'

export default function FloatingNavBar() {

    const router = useRouter();
    const { section } = router.query;

    return <>

        <div className={styles.bar}>
            <div className={styles.left}>
                {leftSections.map((obj) => {
                    return <Link key={"keyfor" + obj.title} href={obj.url}>
                        <a className={("/" + section) === obj.url ? styles.barLinkActive : obj.isExternal ? styles.barLinkExternal : styles.barLink}

                            onMouseOver={("/" + section) === obj.url ? null : () => {
                                let hoverImage = document.getElementById(obj.title + "Image");
                                if (hoverImage) hoverImage.className = styles2.footerImage;
                            }}
                            onMouseLeave={("/" + section) === obj.url ? null : () => {
                                let hoverImage = document.getElementById(obj.title + "Image");
                                if (hoverImage) hoverImage.className = styles2.footerImageHidden;
                            }}
                            target={obj.isExternal? "_blank" : ""} rel={obj.isExternal? "noopener noreferrer" : ""}
                        >
                            {obj.title} {obj.isExternal ? <Launch className={styles.barLinkExternalIcon} /> : ""}
                        </a>
                    </Link>;
                })}
            </div>
            <Link href="/">
                <a>
                    <img src="/images/mrossary.svg" className={styles.logo} />
                </a>
            </Link>
            <div className={styles.right}>
                {rightSections.map((obj) => {
                    return <Link key={"keyfor" + obj.title} href={obj.url} >
                        <a className={("/" + section) === obj.url ? styles.barLinkActive : obj.isExternal ? styles.barLinkExternal : styles.barLink}

                            onMouseOver={("/" + section) === obj.url ? null : () => {
                                let hoverImage = document.getElementById(obj.title + "Image");
                                if (hoverImage) hoverImage.className = styles2.footerImage;
                            }}
                            onMouseLeave={("/" + section) === obj.url ? null : () => {
                                let hoverImage = document.getElementById(obj.title + "Image");
                                if (hoverImage) hoverImage.className = styles2.footerImageHidden;
                            }}
                            target={obj.isExternal? "_blank" : ""} rel={obj.isExternal? "noopener noreferrer" : ""}
                        >
                            {obj.title} {obj.isExternal ? <Launch className={styles.barLinkExternalIcon} /> : ""}
                        </a>
                    </Link>;
                })}
            </div>
        </div>
    </>
}