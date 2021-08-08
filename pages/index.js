import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Magic the Gathering | Home</title>
        <meta name="keywords" content="rules"/>
      </Head>
      <div>
        <h1 className={styles.title}>Magic the Gathering</h1>
        <p className={styles.text}>Welcome! This web application contains the rule book of Wizards of the Coast. The content is divided into 9 sections. Each section contains multiple chapters. When clicking the chapter, the page will redirect to a new page which contains a list of all rules in that chapter. You can search for the rule including a particular word by typing in the search box (case sensitive). </p>
        <p className={styles.text}>This page is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.</p>
        <Link href="/rules/">
          <a className={styles.btn}>See content</a>
        </Link>
      </div>
    </>
  )
}
