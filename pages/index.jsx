import Head from 'next/head'
import Link from 'next/link'
import Countdown from './countdown'
import Team from './team'
import Address from './address'
import {Card, Col, Container,Row} from 'react-bootstrap'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Azura 2k23</title>
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
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
          <Row>
            <h1 className={styles.header}>
              <span>Azura</span>2k23
            </h1>
          </Row>
          <Row className={styles.description}>
            <h2>
              Annual technical symposium of CMRCET
            </h2>
          </Row>
          <Row className={styles.description}>
            <h2>
              4th April 2023
            </h2>
          </Row>
          <Row>
            <Countdown/>
          </Row>
          <Row className={styles.title}>
            <h1><span>Events </span>in Azura 2k23</h1>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technical">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events &rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
            <Row>
              <Col>
                <Card className={styles.cardSpread}>
                  <Link href="./nontechnical">
                    <Card.Body>
                      <Card.Title>
                        <h4>Non Technical Events &rarr;</h4>
                      </Card.Title>
                      <Card.Text>Click here to view all non technical events</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className={styles.cardSpread}>
                  <Link href="./stalls">
                    <Card.Body>
                      <Card.Title>
                        <h4>Stalls &rarr;</h4>
                      </Card.Title>
                      <Card.Text>Click here to view all Stalls</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
          </Row>
          <Row>
            <Col>
            <a className={styles.cardSpread} href='https://drive.google.com/file/d/1rC9Bpn2KyiKhFfiFKI-ylpohvbqKBW-b/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
              <h4>Rules &amp; Regulations &rarr;</h4>
            </a>
            </Col>
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
