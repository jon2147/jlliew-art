import { useRouter } from 'next/router'
import styles from '../components/ContentWithFooter.module.css';
import Link from 'next/link'
import Head from 'next/head'
import FloatingNavBar from '../components/FloatingNavBar';
import IndexFooter from '../components/IndexFooter';
import ContentWithFooter from '../components/ContentWithFooter';

import { sectionsData } from '../sections/sections'

export async function getStaticPaths() {

    let sectionKeys = Object.keys(sectionsData);

    let paths = sectionKeys.map(key => {
        return {
            params: { section: key },
        }
    })

    console.log(paths)

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
    console.log(section)
    return <>
        <Head>
            <title>{section.title + " - Jonathan Liew"}</title>
        </Head>
        <ContentWithFooter></ContentWithFooter>
    </>
}