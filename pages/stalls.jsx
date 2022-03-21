import styles from '../styles/Home.module.css'
import StallsData from './StallsData.json'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'

const Stalls = () => {
    return(
      <div className={styles.container}>
        <Container>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <Row className={styles.title}>
            <h1><span>Stalls</span> for Azura 2k22</h1>
          </Row>
          <Row xs={1} sm={1} md={2}>
          {
            StallsData.map((index) => (
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
export default Stalls