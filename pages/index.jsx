import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
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
          <h1 className={styles.title}>
              Welcome to <span>T&amp;P helpdesk</span> of CMRCET
            </h1>
            <p className={styles.description}>
              This is your one stop solution for all your Training and Placements related doubts
            </p>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Resources &rarr;</h2>
            <p>
              Click here to find company specific resources
            </p>
          </a>
          <a href="#" className={styles.card}>
            <h2>Training Schedules &rarr;</h2>
            <p>
              Click here for training schedules and links
            </p>
          </a>
          <a href="#" className={styles.card}>
            <h2>Monthly Bulletin &rarr;</h2>
            <p>Click here to see trainings, placements and selects of last month</p>
          </a>
          <a href="#" className={styles.card}>
            <h2>Upcoming Drives &rarr;</h2>
            <p>Click here to see the upcoming drives</p>
          </a>
          <a href="/team" className={styles.card}>
            <h2>Our team &rarr;</h2>
            <p>Click here to see our T&amp;P team and reach out to them</p>
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
