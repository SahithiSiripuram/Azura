import { useReducer } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import styles from '../styles/Home.module.css'

function Countdown() {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    var countDownDate = new Date("Apr 04, 2023 9:00:00").getTime();
    var myfunc = setInterval(function () {
        forceUpdate();
    }, 1000);
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft) % (1000 * 60) / (1000));
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className={styles.timerDiv}> {days} </Col>
                    <Col className={styles.timerDiv}> {hours} </Col>
                    <Col className={styles.timerDiv}> {minutes}</Col>
                    <Col className={styles.timerDiv}> {seconds} </Col>
                </Row>
                <Row>
                    <Col> <p className={styles.timerText}>days</p> </Col>
                    <Col> <p className={styles.timerText}>hours</p> </Col>
                    <Col> <p className={styles.timerText}>minutes</p> </Col>
                    <Col> <p className={styles.timerText}>seconds</p> </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Countdown
