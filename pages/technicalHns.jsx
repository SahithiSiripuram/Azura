import styles from "../styles/Home.module.css";
import TechnicalEventsHnSData from "./TechnicalEventsHnSData";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const TechnicalHnS = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Row className={styles.title}>
          <h1>
            Technical events organized for<span> Freshmen students</span>
          </h1>
        </Row>
        <Row xs={1} sm={1} md={2}>
          {TechnicalEventsHnSData.map(index => (
            <Col key={index._id}>
              <Card className={styles.cardDiv}>
                <Card.Body>
                  <Card.Title>
                    <h4>{index.title}</h4>
                  </Card.Title>
                  <Card.Text>
                    <p>{index?.description}</p>
                    <p>Organized by:</p>
                    {index.mobile1 && (
                      <a className={styles.icon} href={index.mobile1}>
                        <FaPhoneAlt />
                        <p>{index.organizer1}</p>
                      </a>
                    )}
                    {index.mobile2 && (
                      <a className={styles.icon} href={index.mobile2}>
                        <FaPhoneAlt />
                        <p>{index.organizer2}</p>
                      </a>
                    )}
                    {index.mobile3 && (
                      <a className={styles.icon} href={index.mobile3}>
                        <FaPhoneAlt />
                        <p>{index.organizer3}</p>
                      </a>
                    )}
                    {index.mobile4 && (
                      <a className={styles.icon} href={index.mobile4}>
                        <FaPhoneAlt />
                        <p>{index.organizer4}</p>
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
export default TechnicalHnS;
