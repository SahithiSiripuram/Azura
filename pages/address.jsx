import React from 'react'
import {Container,Row} from 'react-bootstrap'
import styles from '../styles/Home.module.css'

function Address() {
  return (
    <div>
      <Container className={styles.marginBottom}>
          <Row className={styles.title}>
            <h1><span>Address</span></h1>
          </Row>
        <Row>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606.06359007908!2d78.48353507462812!3d17.601225001803122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb850bb545e95b%3A0x4367e509f5ff38e5!2sCMR%20College%20of%20Engineering%20%26%20Technology%2C%20Hyderabad%20(CMRCET%2FCMRK)!5e0!3m2!1sen!2sin!4v1647325804948!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
          />
        </Row>
      </Container>
    </div>
  )
}

export default React.memo(Address)