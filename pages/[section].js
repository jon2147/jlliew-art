import { useRouter } from 'next/router'
import styles from '../components/ContentWithFooter.module.css';
import Link from 'next/link'
import Head from 'next/head'
import FloatingNavBar from '../components/FloatingNavBar';
import IndexFooter from '../components/IndexFooter';
import SectionBackground from '../components/SectionBackground'
import FadedContent from '../components/FadedContent'

import ContentWithFooter from '../components/ContentWithFooter';

import { sectionsData } from '../sections/sections'
import IndexNavigation from '../components/IndexNavigation';
import Workbook from '../components/Workbook';
import Sketchbook from '../components/Sketchbook';

export async function getStaticPaths() {

    let sectionKeys = Object.keys(sectionsData);

    let paths = sectionKeys.map(key => {
        return {
            params: { section: key },
        }
    })

    return {
        paths, fallback: false
    }
}

export async function getStaticProps({ params }) {
    let section = sectionsData[params.section]

    return {
        props: { section }
    }
}

export default function Section({ section }) {

    return <>

        <Head>
            <title>{section.title + " - Jonathan Liew"}</title>
        </Head>
        <div className={styles.bufferedContentContainer}>
            <IndexNavigation background={section.image} /> {/* This would be the same for e.g. a personal project page, with background set to the project's */}
            {section.id === "work"  ? <Workbook /> : <></>}
            {section.id === "sketchbook"  ? <Sketchbook /> : <></>}
            
        </div>
    </>
}