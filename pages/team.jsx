import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaPhoneAlt} from "react-icons/fa"
import sampleImg from '../public/android-chrome-512x512.png'

function Team(){
    return(
        <div className={styles.container}>
        <div className={styles.intro}>
            <h1 className={styles.title}><span>Student Coordinators</span> for Azura 2k22</h1>
        </div>
        <main className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <Image src={sampleImg}/>
                    <p className={styles.description}>Student name</p>
                    <p className={styles.description}>3rd year, ECE</p>
                    <p className={styles.description}>
                        <a href="tel:+91 9704909222"><FaPhoneAlt/></a>
                    </p>
                </div>
                <div className={styles.card}>
                    <Image src={sampleImg}/>
                    <p className={styles.description}>Student name</p>
                    <p className={styles.description}>3rd year, ECE</p>
                    <p className={styles.description}>
                        <a href="tel:+91 9704909222"><FaPhoneAlt/></a>
                    </p>
                </div>
                <div className={styles.card}>
                    <Image src={sampleImg}/>
                    <p className={styles.description}>Student name</p>
                    <p className={styles.description}>3rd year, ECE</p>
                    <p className={styles.description}>
                        <a href="tel:+91 9704909222"><FaPhoneAlt/></a>
                    </p>
                </div>
                <div className={styles.card}>
                    <Image src={sampleImg}/>
                    <p className={styles.description}>Student name</p>
                    <p className={styles.description}>3rd year, ECE</p>
                    <p className={styles.description}>
                        <a href="tel:+91 9704909222"><FaPhoneAlt/></a>
                    </p>
                </div>
                <div className={styles.card}>
                    <Image src={sampleImg}/>
                    <p className={styles.description}>Student name</p>
                    <p className={styles.description}>3rd year, ECE</p>
                    <p className={styles.description}>
                        <a href="tel:+91 9704909222"><FaPhoneAlt/></a>
                    </p>
                </div>
                <div className={styles.card}>
                    <Image src={sampleImg}/>
                    <p className={styles.description}>Student name</p>
                    <p className={styles.description}>3rd year, ECE</p>
                    <p className={styles.description}>
                        <a href="tel:+91 9704909222"><FaPhoneAlt/></a>
                    </p>
                </div>
            </div>
        </main>
        </div>
    )
}
export default Team