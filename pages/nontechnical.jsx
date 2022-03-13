import Link from 'next/link'
import styles from '../styles/Home.module.css'
function Nontechnical(){
    return(
        <div className={styles.container}>
        <div className={styles.intro}>
            <h1 className={styles.title}><span>Non Technical events</span> for Azura 2k22</h1>
        </div>
        <main className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <p className={styles.heading}>Stall name</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className={styles.description}>Organised by: Lorem ipsum dolor sit amet</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.heading}>Stall name</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className={styles.description}>Organised by: Lorem ipsum dolor sit amet</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.heading}>Stall name</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className={styles.description}>Organised by: Lorem ipsum dolor sit amet</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.heading}>Stall name</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className={styles.description}>Organised by: Lorem ipsum dolor sit amet</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.heading}>Stall name</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className={styles.description}>Organised by: Lorem ipsum dolor sit amet</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.heading}>Stall name</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className={styles.description}>Organised by: Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </main>
        </div>
    )
}
export default Nontechnical