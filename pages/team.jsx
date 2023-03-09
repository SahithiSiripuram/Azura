import styles from '../styles/Home.module.css'
import TeamData from './TeamData.json'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'
import {FaPhoneAlt} from "react-icons/fa"

const Team = () => {
    return(
      <div className={styles.container}>
        <Container>
          <Row className={styles.title}>
            <h1><span>Student Coordinators</span> for Azura 2k23</h1>
          </Row>
          <Row xs={1} sm={1} md={2}>
          {
            TeamData.map((index) => (
              <Col key={index._id}>
                <Card className={styles.cardDiv}>
                  <Card.Body>
                    <Card.Text>
                      <h4>{index.name}</h4>
                      <p>{index.department}</p>
                    </Card.Text>
                    <a className={styles.icon} href={index.mobile}>
                        <FaPhoneAlt/>
                    </a>
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
export default Team
