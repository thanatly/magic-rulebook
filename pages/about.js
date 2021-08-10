import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>Magic the Gathering | About</title>
        <meta name="keywords" content="rules"/>
      </Head>
      <div>
        <h1>About</h1>
        <p>Natalie is a software developer based in Helsinki, Finland. Born and raised in Bangkok, Thailand, she completed a B.Eng in Control and System Engineering from Tokyo Institute of Technology in Japan. Currently, she is doing a master’s degree in Entrepreneurship Innovation Management at Aalto University. She is doing a minor in Computer Sciences (Web Technologies, Applications, and Science Track).</p>
        <p>She is a business-oriented engineer who is passionate about tech startups. She excels on a collaborative project where creativity meets functionality. Her work motivation comes from new challenges outside her comfort zone. Her previous roles as a Chief Curator at Slush Tokyo and a Technical Account Manager at Goldman Sachs demonstrate strong product management and communication skills.</p>
        <p>This website was built with React.js on the Next.js framework. It was auto-deployed and hosted on Vercel. The rule of the game was fetched from the text file here. Next.js was a convenient framework to create dynamic URL routing for each chapter.</p>
        <a className={styles.btn} href="https://github.com/thanatly/magic-rulebook"> See Source Code</a>
        <a className={styles.btn} href="https://github.com/thanatly"> Github</a>
        <a className={styles.btn} href="https://www.linkedin.com/in/nutthanuntha/"> Linkedin</a>
      </div>
    </>
  );
}
 
export default About;