import styles from './Workbook.module.css';
import Link from 'next/link'

import { workItems } from '../sections/works'


export default function Workbook() {


    let tileItems = [];
    let workKeys = Object.keys(workItems);
    
    workKeys.forEach((key)=> {
        tileItems.push(workItems[key]);
    });


    return (
        <>
            <div className={styles.workTiles}>
                {tileItems.map((tile, index) => {
                    return <Link key={index + tile.projectTitle} href={"/work" + tile.projectURL}>
                     
                        <a className={styles.workTile} title={tile.projectTitle}>
                            <img className={styles.tileImage} src={tile.projectThumbnail} alt={tile.projectTitle} />
                        </a>
                    </Link>;
                })}
            </div>
        </>
    )
}