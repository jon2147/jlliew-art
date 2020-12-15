import styles from './ContentWithFooter.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';
import PlaceholderContent from './PlaceholderContent';
import ContentWithFooter from './ContentWithFooter';
import IndexFooter from '../components/IndexFooter';

export default function FadedContent({ children }) {

    const router = useRouter();
    const { section } = router.query;

    return (
        <div className={styles.fadedContentContainer}>
            <div className={styles.fadedContent}>

                <ContentWithFooter><PlaceholderContent/></ContentWithFooter>
            </div>
        </div>
    )
}