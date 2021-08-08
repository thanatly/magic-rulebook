import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="rules"/>
      </Head>
      <div>
        <h1>About</h1>
        <p>Edit later Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <a className={styles.btn} href="https://github.com/thanatly"> See Source Code</a>
      </div>
    </>
  );
}
 
export default About;