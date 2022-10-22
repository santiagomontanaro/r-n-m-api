import React from 'react'
import { Link } from 'react-router-dom'
import s from './Card.module.css'

function Card({ img, name, status, id }) {
  return (
    <Link to={`/characters/${name}/${id}`} target='_blank' className={s.card}>
      <div className={s.main}>
        <div className={s.img}>
          <img src={img} alt={name} />
          {
            status === 'Alive' ?
              <div className={s.status} style={{ backgroundColor: '#039637', border: '1px solid #252525' }}>{status}</div>
              :
              <div className={s.status} style={{ backgroundColor: '#c52626', border: '1px solid #252525' }}>{status}</div>
          }
          {
            status === 'unknown' ? <div className={s.status} style={{ backgroundColor: '#3c3c3c', border: '1px solid #252525' }}>{status}</div> : null
          }
        </div>
        <div className={s.info}>
          <span>{name}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
