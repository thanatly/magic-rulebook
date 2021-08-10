import Link from 'next/link'
import React from 'react'
import styles from '../styles/Rules.module.css'

// Display Section
function Section ({rule}){
    return <h3 key={rule.id}> { rule.id }) {rule.text}</h3>
}

// Display Chapter with a dynamic hyperlink to rules
function Chapter ({rule}){
    return  <Link href={'/rules/' + rule.id} key={rule.id} >
    <a className={styles.single}> 
        <h3>{ rule.id }) { rule.text }</h3>
    </a>
    </Link>;
}

// Display rules
function Rule ({rule}){
    return <h4 className={styles.text} key={rule.id}>{ rule.id } {rule.text}</h4>
}

const Display = (props) => {

    const {rule, newSearch} = props

    if (newSearch){
        return <Rule rule={rule}/>
    } else {
        /* Determine which class to be displayed of based on the lenght of rule id.
        Not optimal because we need to know the exact format of rule id.
        For example, 
            "1. Game Concepts" is Section
            "100. General" is Chapter
            "100.1 These Magic rules..." is Rule
        */
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