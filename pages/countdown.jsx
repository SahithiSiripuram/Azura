import { useReducer } from 'react';
import styles from '../styles/Home.module.css'

function Countdown() {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    var countDownDate = new Date("Mar 26, 2022 9:00:00").getTime();
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
        <div  className={styles.container}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.cardTimer}>
                        <p className={styles.headingTimer}>{days}</p>
                        <p className={styles.description}>days</p>
                    </div>
                    <div className={styles.cardTimer}>
                        <p className={styles.headingTimer}>{hours}</p>
                        <p className={styles.description}>hours</p>
                    </div>
                    <div className={styles.cardTimer}>
                        <p className={styles.headingTimer}>{minutes}</p>
                        <p className={styles.description}>minutes</p>
                    </div>
                    <div className={styles.cardTimer}>
                        <p className={styles.headingTimer}>{seconds}</p>
                        <p className={styles.description}>seconds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Countdown