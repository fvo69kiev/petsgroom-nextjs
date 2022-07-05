import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create PetsGroom site</title>
        <meta name="description" content="Create PetsGroom site by next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Create PetsGroom site
        </h1>
          <p>Coming soon!</p>
      </main>
    </div>
  )
}
