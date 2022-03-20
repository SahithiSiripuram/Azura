import styles from '../styles/Home.module.css'
import TechnicalEventsCSEData from './TechnicalEventsCSEData.json'
import TechnicalEventsCSCData from './TechnicalEventsCSCData.json'
import TechnicalEventsCSMData from './TechnicalEventsCSMData.json'
import TechnicalEventsITData from './TechnicalEventsITData.json'
import TechnicalEventsECEData from './TechnicalEventsECEData.json'
import TechnicalEventsEEEData from './TechnicalEventsEEEData.json'
import TechnicalEventsMechData from './TechnicalEventsMechData.json'
import TechnicalEventsCivilData from './TechnicalEventsCivilData.json'
import TechnicalEventsMBAData from './TechnicalEventsMBAData.json'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'

const Technical = () => {
    return(
      <div className={styles.container}>
        <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of CSE</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsCSEData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of CSC (Cyber Security)</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsCSCData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of CSM (AI ML)</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsCSMData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of IT</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsITData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of ECE</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsECEData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of EEE</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsEEEData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of Mechanical</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsMechData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of Civil</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsCivilData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
          <Row className={styles.title}>
            <h1>Technical events by the<span>Department of MBA</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            TechnicalEventsMBAData.map((index) => (
              <Col  key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Title>
                      <h4>{index.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{index.description}</p>
                      <p>Organised by: {index.organizer}</p>
                    </Card.Text>
                    <a href={index.razorpayLink} target="_blank" rel="noreferrer" className={styles.cardAnchor}>Register</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
        </Container>
      </div>
    )
}
export default Technical