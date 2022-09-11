import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({...rest}) => {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" {...rest} />
      <button className="btn btn-outline-secondary" {...rest}><FaSearch /></button>
    </div>

  )
}

export default Search