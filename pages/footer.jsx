import Link from 'next/link'
import styles from '../styles/Home.module.css'
function Footer() {
    return(
        <footer className={styles.footer}>
            <Link href="https://cmrcet.ac.in/">
            <a target="_blank" rel="noopener noreferrer">
                T&amp;P team is a part of CMR College of Engineering &amp; Technology
            </a>
            </Link>
        </footer>
    )
}
export default Footer