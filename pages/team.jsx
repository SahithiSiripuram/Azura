import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactCardFlip from 'react-card-flip';
import TeamData from './TeamData.json'
import React from 'react';
import {FaPhoneAlt} from "react-icons/fa"


const Card = ({ team }) => {
    return (
        <div
          onClick={() => setIsFlipped((prev) => !prev)}
          className={styles.card}
        >
          <div>
            <p className={styles.heading}>{team.name}</p>
            <p className={styles.description}>{team.department}</p>
            <p className={styles.description}>
                <a href="tel:{team.mobile}">
                    <FaPhoneAlt/>
                </a>
            </p>
          </div>
        </div>
    );
  };
const Team = () => {
    return(
        <div className={styles.container}>
        <div className={styles.intro}>
            <h1 className={styles.title}><span>Student coordinators</span> for Azura 2k22</h1>
        </div>
        <main className={styles.main}>
            <div className={styles.grid}>
                {TeamData.map((item,index) => (
                    <Card team={item} key={'card-${index}'}/>
                ))}
            </div>
        </main>
        </div>
    )
}
export default Team