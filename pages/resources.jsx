import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'

function Resources(){
    return(
        <div className={styles.container}>
        <Head>
            <title>T&amp;P helpdesk</title>
            <meta name="description" content="Your one stop solution for all your questions related to t&amp;p" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <Header/>
        <Footer/>
        </div>
    )
}
export default Resources