import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactCardFlip from 'react-card-flip';
import NonTechnicalEventsData from './NonTechnicalEventsData.json'
import React from 'react';

const CardStyle = {
    border: "1px solid #1A74E2",
    padding: "20px",
    margin: "20px",
    width: "200px",
  };

const Card = ({ event }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          style={CardStyle}
          onClick={() => setIsFlipped((prev) => !prev)}
          className={styles.card}
        >
          <div className='CardFront'>
            <p className={styles.heading}>{event.title}</p>
            <p className={styles.description}>{event.description}</p>
            <p className={styles.description}>Organised by: {event.organizer}</p>
            <p className={styles.description}><span>Register</span></p>
          </div>
        </div>
        <div
          style={CardStyle}
          onClick={() => setIsFlipped((prev) => !prev)}
          className={styles.card}
        >
            <div className="CardBack">
            <p className={styles.heading}>{event.title}</p>
            <Image src={event.imgUrl} width="20%" height="20%"/>
            <p className={styles.description}>Scan to pay</p>
          </div>
        </div>
      </ReactCardFlip>
    );
  };
const NonTechnical = () => {
    return(
        <div className={styles.container}>
        <div className={styles.intro}>
            <h1 className={styles.title}><span>Non Technical events</span> for Azura 2k22</h1>
        </div>
        <main className={styles.main}>
            <div className={styles.grid}>
                {NonTechnicalEventsData.map((item,index) => (
                    <Card event={item} key={'card-${index}'}/>
                ))}
            </div>
        </main>
        </div>
    )
}
export default NonTechnical