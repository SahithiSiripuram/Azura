import styles from '../styles/Home.module.css'
import NonTechnicalEventsData from './NonTechnicalEventsData.json'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'

const Nontechnical = () => {
    return(
      <div className={styles.container}>
        <Container>
          <Row className={styles.title}>
            <h1><span>Non Technical events</span> for Azura 2k22</h1>
          </Row>
          <Row xs={1} sm={1} md={2}> 
          {
            NonTechnicalEventsData.map((index) => (
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