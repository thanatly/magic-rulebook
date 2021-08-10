import getRules from '../lib/util'
import Filter from '../../comps/Filter'
import Display from '../../comps/Display'
import React, { useState, useEffect } from 'react'

export const getStaticProps = async () => {
  const data = await getRules()

  return {
    props: { rules: data }
  }
}

const Ninjas = ({ rules }) => {
  const [ newSearch, setNewSearch ] = useState('')

  const handleSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }
  
  const searchResults = rules.filter(rule => rule.text.includes(newSearch))

  return (
    <div>
      <h1>Rulebook</h1>
      <Filter newSearch={newSearch} handleSearch={handleSearch}/>
      {searchResults.map(rule => 
        <Display 
        key={rule.id} 
        rule={rule}
        newSearch={newSearch} />
      )}

    </div>
  );
}
 
export default Ninjas;