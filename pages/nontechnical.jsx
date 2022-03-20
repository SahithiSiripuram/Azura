import styles from '../styles/Home.module.css'
import NonTechnicalEventsCSEData from './NonTechnicalEventsCSEData.json'
import NonTechnicalEventsCSCData from './NonTechnicalEventsCSCData.json'
import NonTechnicalEventsCSMData from './NonTechnicalEventsCSMData.json'
import NonTechnicalEventsITData from './NonTechnicalEventsITData.json'
import NonTechnicalEventsECEData from './NonTechnicalEventsECEData.json'
import NonTechnicalEventsEEEData from './NonTechnicalEventsEEEData.json'
import NonTechnicalEventsMechData from './NonTechnicalEventsMechData.json'
import NonTechnicalEventsCivilData from './NonTechnicalEventsCivilData.json'
import NonTechnicalEventsMBAData from './NonTechnicalEventsMBAData.json'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'

const Nontechnical = () => {
    return(
      <div className={styles.container}>
        <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
          <Row className={styles.title}>
            <h1>Non Technical events by the<span>Department of CSE</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsCSEData.map((index) => (
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
            <h1>Non Technical events by the<span>Department of CSC (Cyber Security)</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsCSCData.map((index) => (
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
            <h1>Non Technical events by the<span>Department of CSM (AI ML)</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsCSMData.map((index) => (
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
            <h1>Non Technical events by the<span>Department of IT</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsITData.map((index) => (
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
            <h1>Non Technical events by the<span>Department of ECE</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsECEData.map((index) => (
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
            <h1>Non Technical events by the<span>Department of EEE</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsEEEData.map((index) => (
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
            <h1>Non Technical events by the<span>Department of Mechanical</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsMechData.map((index) => (
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
            <h1>Non Technical events by the<span>Department of Civil</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsCivilData.map((index) => (
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
            <h1>Non Technical events by the<span>Department of MBA</span></h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsMBAData.map((index) => (
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
export default Nontechnical