import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Countdown from './countdown'
import Technical from './technical'
import Nontechnical from './nontechnical'
import Stalls from './stalls'
import Team from './team'
import Address from './address'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Azura 2k22</title>
        <meta name="description" content="Annual technical symposium of CMRCET" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className={styles.intro}>
          <h1 className={styles.title}>
              <span>Azura</span> 2k22
            </h1>
            <p className={styles.description}>
              Annual technical symposium of CMRCET
            </p>
            <p className={styles.description}>
              26th March 2022
            </p>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Countdown/>
          <Technical/>
          <Nontechnical/>
          <Stalls/>
          <Team/>
          <Address/>
        </div>
      </main>
    </div>
  )
}
