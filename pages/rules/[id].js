import getRules from '../api/util'
import styles from '../../styles/Home.module.css'

export const getStaticPaths = async () => {
  const data = await getRules()

  // map data to an array of path objects with params (id)
  const paths = data.map(rule => {
    return {
      params: { id: rule.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const rules = await getRules()

  // find the info for just one chapter
  const chap = rules.find(x => x.id === id)

  /* Define chap with title and rules
  const show = {
    chap_id : 100
    chap_tutle : General
    rules :
    [
      {
        id: 100.1,
        text: These magic...
      },
      {
        id: 100.1a,
        text: A two player...
      },

    ]
  }
  */
  var rules_only = rules.filter(rule => String(rule.id).startsWith(chap.id+'.'))

  var show ={
    chap_id : chap.id,
    chap_title : chap.text,
    rules: rules_only
  }

  return {
    props: { rule: show }
  }
}

const Details =  ({ rule }) => {
  return (<div>
          <h3 className={styles.single}> {rule.chap_id}) {rule.chap_title}</h3>
          {rule.rules.map(rule => 
          <p className={styles.text} key = {rule.id}> {rule.id} {rule.text}</p>)
          }  
          <a className={styles.btn} href="/rules"> Back</a>   
          </div>);
}

export default Details;