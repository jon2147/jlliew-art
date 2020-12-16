import styles from './PlaceholderContent.module.css'


export default function Homepage({ children }) {
    return (
        <>

            <h1 className={styles.h1}>Denne side er under opførelse.</h1>
            <section className={styles.section}>
                <h2 className={styles.h2}>Mrossanes Cabapret</h2>
                <p className={styles.prose}>O Arend Harmohel anoen meld i arelest amros bethoed se Iribienes eleb. For neole selusid del oelest, mueries nen ef baemel – Mrossanes cabapret e oelespitel lest Gallusid del Iniriesid.</p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.h2}>O Halmosiliath</h2>
                <p className={styles.prose}>Sefeol ef o hel sel Osirion deriem. Del on Cormorathenned, si Halmosiliath, si Osirion Brumaidha, sef eth raubrie huelos eom hwealm neoleb fornwen asveld sorriend.</p>
            </section>
        </>
    )
}