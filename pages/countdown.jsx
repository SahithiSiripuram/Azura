import { useReducer } from 'react';
import styles from '../styles/Home.module.css'
const CardStyle = {
    border: "1px solid #1A74E2",
    padding: "20px",
    margin: "20px",
    width: "200px",
  };
function Countdown() {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    var countDownDate = new Date("Mar 26, 2022 9:00:00").getTime();
    var myfunc = setInterval(function () {
        forceUpdate();
    }, 60*1000);
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft) % (1000 * 60) / (1000));
    return (
        <div  className={styles.container}>
        <div className={styles.grid}>
            <div style={CardStyle} className={styles.cardTimer}>
                <p className={styles.headingTimer}>{days}</p>
                <p className={styles.description}>days</p>
            </div>
            <div style={CardStyle} className={styles.cardTimer}>
                <p className={styles.headingTimer}>{hours}</p>
                <p className={styles.description}>hours</p>
            </div>
            <div style={CardStyle} className={styles.cardTimer}>
                <p className={styles.headingTimer}>{minutes}</p>
                <p className={styles.description}>minutes</p>
            </div>
            <div style={CardStyle} className={styles.cardTimer}>
                <p className={styles.headingTimer}>{seconds}</p>
                <p className={styles.description}>seconds</p>
            </div>
        </div>
        </div>
    )
}
export default Countdown