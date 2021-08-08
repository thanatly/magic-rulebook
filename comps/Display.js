import Link from 'next/link'
import React from 'react'
import styles from '../styles/Rules.module.css'

function Section ({rule}){
    return <h3 key={rule.id}> { rule.id }) {rule.text}</h3>
}

function Chapter ({rule}){
    return  <Link href={'/rules/' + rule.id} key={rule.id} >
    <a className={styles.single}> 
        <h3>{ rule.id }) { rule.text }</h3>
    </a>
    </Link>;
}

function Rule ({rule}){
    return <h4 className={styles.text} key={rule.id}>{ rule.id } {rule.text}</h4>
}

const Display = (props) => {

    const {rule, newSearch} = props

    if (newSearch){
        return <Rule rule={rule}/>
    } else {
        const id_length = rule.id.length
        if(id_length === 1){
            return <Section rule={rule}/>
        } else if(id_length === 3){
            return <Chapter rule={rule}/>
        }
    }
    return null
}

export default Display