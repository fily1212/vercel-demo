import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sondaggio di prova</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sondaggio di prova!
        </h1>

        <p className={styles.description}>
          Prova di descrizione
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/demo" className={styles.card}>
            <h3>Titolo 1 &rarr;</h3>
            <p>Card - clicca qui per pagina 2</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Titolo 2 &rarr;</h3>
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
