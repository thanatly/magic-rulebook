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
        <p>Natalie is a software developer based in Helsinki, Finland. She completed a bachelor’s degree in Control and System Engineering from Tokyo Institute of Technology. Currently, she is pursuing a master’s degree in Entrepreneurship Innovation Management at Aalto University. Her minor is Computer Science - Web Technologies, Applications, and Science Track. She is fluent in English, Japanese and Thai.</p>
        <p>She is a business-oriented engineer. Her work motivation comes from new challenges outside her comfort zone. She excels on a collaborative project where creativity meets functionality. Her previous roles as a Chief Curator at Slush Tokyo and a Technical Account Manager at Goldman Sachs demonstrate strong product management and communication skills.</p>
        <p>This website was built with React.js on the Next.js framework, allowing a convenient dynamic URL routing. It was auto-deployed and hosted on Vercel. The rule of the game was fetched from the text file <a href="https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt"> here</a>. </p>
        <a className={styles.btn} href="https://github.com/thanatly/magic-rulebook">See Source Code</a>
        <a className={styles.btn} href="https://github.com/thanatly">Github</a>
        <a className={styles.btn} href="https://www.linkedin.com/in/nutthanuntha/">Linkedin</a>
      </div>
    </>
  );
}
 
export default About;