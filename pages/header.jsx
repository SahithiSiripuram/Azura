import Link from 'next/link'
import styles from '../styles/Home.module.css'
function Header() {
    return(
        <header className={styles.header}>
            <Link href="./resources">
            <a rel="noopener noreferrer">
               Resources
            </a>
            </Link>
            <Link href="./schedules">
            <a rel="noopener noreferrer">
               Training schedules
            </a>
            </Link>
            <Link href="./bulletin">
            <a rel="noopener noreferrer">
               Monthly Bulletin
            </a>
            </Link>
            <Link href="./drives">
            <a rel="noopener noreferrer">
               Upcoming Drives
            </a>
            </Link>
            <Link href="./team">
            <a rel="noopener noreferrer">
               Our Team
            </a>
            </Link>
        </header>
    )
}
export default Header