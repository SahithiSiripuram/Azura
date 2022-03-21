import styles from '../styles/Home.module.css'
import React from 'react';
import {Card, Col, Container,Row} from 'react-bootstrap'

const Rules = () => {
    return(
      <div className={styles.container}>
        <Container>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <Row className={styles.title}>
            <h1><span>Rules &amp; Regulations </span> for Azura 2k22</h1>
          </Row>
                <Row className={styles.list}>
                    <Row>
                        AZURA-2K22, National level student's symposium is scheduled on 26 March 2022 covering various technical and non-technical events
                    </Row>
                    <Row>
                        All the technical events must be completed on 26-03-2022 only
                    </Row>
                    <Row>
                        Department Faculty coordinators should take care of all their technical events
                    </Row>
                    <Row>
                        Registration fee for technical events (other than paper presentation) can be fixed by department HOD and faculty coordinators (not less than Rs100 per registration per event)
                    </Row>
                    <Row>
                        Venues required for department technical events should be finaRowzed by department faculty coordinator from their department only . No internet facility will be provided to the events other than paper presentation
                    </Row>
                    <Row>
                        Department Faculty coordinators have to submit Rowst of winners and runners of all technical events on 26-03-2022 evening
                    </Row>
                    <Row>
                        All payments registrations for stalls/non-technical and technical events) are to be made only onRowne to college accounts or Gpay scan QR code directly to college account or through cash at the registration counters allotted for each department
                    </Row>
                    <Row>
                        Cash prizes will be awarded only in the form of cheque onRowne NEFT transfer coordinators have to come up with the Rowst of winners/Runners on 26 March 2022. Cheques will be provided on same day evening to the winners and runners up.
                    </Row>
                    <Row>
                        Non-Technical events which require class rooms, power and projectors should be arranged from the department only
                    </Row>
                    <Row>
                        Certificates for all the Organizers shall be provided
                    </Row>
                    <Row>
                        Seminar halls should not be given for any Non-Technical events
                    </Row>
                    <Row>
                        Lunch coupons worth Rs 50/- would be provided to participants of paper presentation only at the registration counter. Lunch Coupons are provided for the participants only on the day of presentation. Lunch will not be provided for participants of any other events
                    </Row>
                    <Row>
                        Certificates and prizes for events technical should be distributed at the respective department in the presence of Judges on the day of event only (26 March 2022)
                    </Row>
                </Row>
        </Container>
      </div>
    )
}
export default Rules