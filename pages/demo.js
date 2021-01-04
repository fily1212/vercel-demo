import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Demo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Demo Prova di cambio pagina
        </h1>

        <p className={styles.description}>
          Prova di cambio pagina 
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Titolo 3 &rarr;</h3>
            <p>Card</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Titolo 4 &rarr;</h3>
            <p>Card</p>
          </a>

 
        </div>
      </main>

      <footer className={styles.footer}>
        
          Esempio di footer costruito con{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
