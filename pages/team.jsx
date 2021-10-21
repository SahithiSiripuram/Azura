import Head from 'next/head'
import Image from 'next/image'
import himabindu from '../public/himabindu.jpg'
import sanjeev from '../public/sanjeev.jpeg'
import rajakishore from '../public/rajakishore.jpeg'
import sahithi from '../public/sahithi.jpg'
import yashwant from '../public/yashwant.jpg'
import sreekar from '../public/sreekar.jpg'
import spandana from '../public/spandana.jpg'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'

function Team(){
    return(
        <div className={styles.container}>
        <Head>
            <title>T&amp;P helpdesk</title>
            <meta name="description" content="Your one stop solution for all your questions related to t&amp;p" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <Header/>
        <div className={styles.intro}>
            <h1 className={styles.title}><span>T&amp;P Team</span> of CMRCET</h1>
            <p className={styles.description}>
                At CMRCET we are not just involved with getting you a job, we strive to help build your career.
                Meet the T&amp;P team of CMRCET and reach out to us, via the form below. 
            </p>
        </div>
        <main className={styles.main}>
            <div className={styles.grid}>
                <h1 className={styles.title}><span>T&amp;P Heads</span> of CMRCET</h1>
                <div className={styles.card}>
                    <Image src={himabindu}/>
                    <h2>Dean T&amp;P, CMRGI</h2>
                    <p className={styles.description}>Dr P. Hima Bindu</p>
                </div>
                <div className={styles.card}>
                    <Image src={rajakishore}/>
                    <h2>Training officer, CMRCET</h2>
                    <p className={styles.description}>Ch. Raja Kishore</p>
                </div>
                <div className={styles.card}>
                    <Image src={sanjeev}/>
                    <h2>Placement officer, CMRCET</h2>
                    <p className={styles.description}>D.S.Sanjeev</p>
                </div>
            </div>
            <div className={styles.grid}>
                <h1 className={styles.title}><span>Student Council</span> of CMRCET</h1>
                <div className={styles.card}>
                    <Image src={sahithi}/>
                    <h2>Head of T&amp;P Board</h2>
                    <p className={styles.description}>Sahithi Siripuram</p>
                </div>
                <div className={styles.card}>
                    <Image src={sahithi}/>
                    <h2>Head of T&amp;P Board</h2>
                    <p className={styles.description}>Ambati Gayatri</p>
                </div>
            </div>
            <div className={styles.grid}>
                <h1 className={styles.title}>Student Council - <span>Working Committee</span> of CMRCET</h1>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <h2>Secretary of T&amp;P Board</h2>
                    <p className={styles.description}>G Yashwant</p>
                    <p className={styles.description}>3rd year, ECE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>R Abhinav</p>
                    <p className={styles.description}>3rd year, CSE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>J Amar Simha Reddy</p>
                    <p className={styles.description}>3rd year, ECE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>Md Ayaz Ahmed</p>
                    <p className={styles.description}>3rd year, CSE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>J Nikhil</p>
                    <p className={styles.description}>3rd year, CSE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>B Pranathi</p>
                    <p className={styles.description}>3rd year, ECE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>Rishab Agarwal</p>
                    <p className={styles.description}>2nd year, CSE</p>
                </div>
                <div className={styles.card}>
                    <Image src={spandana}/>
                    <p className={styles.description}>B Spandana</p>
                    <p className={styles.description}>3rd year, ECE</p>
                </div>
                <div className={styles.card}>
                    <Image src={sreekar}/>
                    <p className={styles.description}>N Sreekar</p>
                    <p className={styles.description}>2nd year, CSE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>G Srujansharma</p>
                    <p className={styles.description}>2nd year, ECE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>Sai Supriya CH</p>
                    <p className={styles.description}>3rd year, CSE</p>
                </div>
                <div className={styles.card}>
                    <Image src={yashwant}/>
                    <p className={styles.description}>Udaya sri</p>
                    <p className={styles.description}>3rd year, CSE</p>
                </div>
            </div>
        </main>
        <Footer/>
        </div>
    )
}
export default Team