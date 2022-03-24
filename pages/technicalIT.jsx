import styles from "../styles/Home.module.css";
import TechnicalEventsITData from "./TechnicalEventsITData.json";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalIT = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row className={styles.title}>
          <h1>
            Technical events by the<span> Department of IT</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {TechnicalEventsITData.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>

                  <div>Organized by:</div>
                  <Card.Text>
                    {index.mobile1 && (
                      <Link href={index.mobile1}>
                        <a className={styles.icon}>
                          <br />
                          <FaPhoneAlt />
                          <br />
                          <i>{index.organizer1}</i>
                        </a>
                      </Link>
                    )}

                    {index.mobile2 && (
                      <a className={styles.icon} href={index.mobile2}>
                        <br />
                        <FaPhoneAlt />
                        <br />
                        <i>{index.organizer2}</i>
                      </a>
                    )}
                    {index.mobile3 && (
                      <a className={styles.icon} href={index.mobile3}>
                        <br />
                        <FaPhoneAlt />
                        <i>{index.organizer3}</i>
                      </a>
                    )}
                  </Card.Text>
                  <Link href={index.razorpayLink}>
                    <a target="_blank" rel="noreferrer" className={styles.cardAnchor}>
                      Register
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default TechnicalIT;
