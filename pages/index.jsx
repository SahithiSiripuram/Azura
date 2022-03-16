import Head from 'next/head'
import Countdown from './countdown'
import Technical from './technical'
import Nontechnical from './nontechnical'
import Stalls from './stalls'
import Team from './team'
import Address from './address'
import {Container,Row} from 'react-bootstrap'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Azura 2k22</title>
        <meta name="description" content="Annual technical symposium of CMRCET" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Container fluid>
          <Row>
            <h1 className={styles.header}>
              <span>Azura</span>2022
            </h1>
          </Row>
          <Row>
            <h2>
              Annual technical symposium of CMRCET
            </h2>
          </Row>
          <Row>
            <h2>
              26th March 2022
            </h2>
          </Row>
          <Row>
            <Countdown/>
          </Row>
          <Row>
            <Technical/>
          </Row>
          <Row>
            <Nontechnical/>
          </Row>
          <Row>
            <Stalls/>
          </Row>
          <Row>
            <Team/>
          </Row>
          <Row>
            <Address/>
          </Row>
        </Container>
      </div>
    </div>
  )
}
