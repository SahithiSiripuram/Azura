import Head from 'next/head'
import Link from 'next/link'
import {Card, Col, Container,Row} from 'react-bootstrap'
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
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalHns">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized for first year students&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized for first year students</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalCSE">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of CSE&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of CSE</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalCSC">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of CSC(Cyber Security)&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of CSC</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalCSM">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of CSM(AI&amp;ML)&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of CSM</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalIT">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of IT&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of IT</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalECE">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of ECE&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of ECE</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalEEE">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of EEE&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of EEE</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalMech">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of Mechanical Engineering&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of Mechanical Engineering</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalCivil">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of Civil Engineering&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of Civil Engineering</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card className={styles.cardSpread}>
              <Link href="./technicalMBA">
                <Card.Body>
                  <Card.Title>
                    <h4>Technical Events organized by department of MBA&rarr;</h4>
                  </Card.Title>
                  <Card.Text>Click here to view all technical events organized by department of MBA</Card.Text>
                </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
