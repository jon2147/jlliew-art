import styles from './Sketchbook.module.css';
import Link from 'next/link'



export default function Sketchbook() {



    return (
        <div className={styles.sketchbookContainer}>
            <div className={styles.sketchContainer}>
                <img className={styles.sketchImage} src={"images/masters/egypt_jss.jpg"} />
            </div>
            <div className={styles.thumbs}>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/thumbnails/wartide_apstaff_thumb.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_vshift.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_soldier_composition.jpg"} alt={"TempAltText"} />
                    </a>
                </Link><Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/thumbnails/wartide_apstaff_thumb.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_vshift.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_soldier_composition.jpg"} alt={"TempAltText"} />
                    </a>
                </Link><Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/thumbnails/wartide_apstaff_thumb.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_vshift.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_soldier_composition.jpg"} alt={"TempAltText"} />
                    </a>
                </Link><Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/thumbnails/wartide_apstaff_thumb.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_vshift.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_soldier_composition.jpg"} alt={"TempAltText"} />
                    </a>
                </Link><Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/thumbnails/wartide_apstaff_thumb.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
                <Link href={"/sketchbook"}>
                    <a className={styles.thumb} title={"TempTitle"}>
                        <img className={styles.thumbImage} src={"/images/wartide/wartide_vshift.jpg"} alt={"TempAltText"} />
                    </a>
                </Link>
            </div>
            <div className={styles.didactic}>
                <h1 className={styles.sketchTitle}>Master Portrait Study - Egyptian Woman</h1>
                <h2 className={styles.sketchDescription}>Original artwork by John Singer Sargent - ‘Egyptian Woman’ (1890–91)</h2>
            </div>
        </div>
    )
}