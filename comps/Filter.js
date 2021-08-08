import React from 'react'

const Filter = (props) => {
  const { newFilter, handleSearch } = props
    return (
        <div>
          Search: <input value={newFilter} onChange={handleSearch}/>
        </div>
    )
}

export default Filter