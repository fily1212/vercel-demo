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
          Casa
        </h1>

        <p className={styles.description}>
          Prova di pagina interna
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Torna indietro &rarr;</h3>
            <p>Card - clicca qui per tornare indietro</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Torna indietro &rarr;</h3>
            <p>Card - clicca qui per tornare indietro</p>
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
