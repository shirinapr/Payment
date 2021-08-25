import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Payment from './Payment'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GeePay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Payment/>
      </main>
    </div>
  )
}
