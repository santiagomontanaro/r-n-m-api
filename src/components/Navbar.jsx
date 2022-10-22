import React, { useState } from 'react'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Card from './Card'

function Navbar({ data }) {

  const [search, setSearch] = useState('')

  return (
    <div className={s.main}>
      <div className={s.nav}>
        <Link to='/' className={s.logo}>
          <h2>Rick and Morty API</h2>
        </Link>
        <input type="text" placeholder="Character..."
          className={s.searchBar}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={s.results}>
        {
          data.filter((val) => {
            if (search === '') {
              return val
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val
            }
          }).map((val, key) => {
            return (
              <Card
                key={key}
                id={val.id}
                name={val.name}
                img={val.image}
                status={val.status}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar
