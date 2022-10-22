import { React } from 'react'
import Card from './Card'
import s from './Cards.module.css'

function Cards({ characters = []}) {

  if (characters) {
    return (
      <div className={s.main}>
        {
          characters.map((e, i) => <Card
            key={i}
            id={e.id}
            img={e.image}
            name={e.name}
            status={e.status}
          />)
        }
      </div>
    )
  } else {
    return 'error'
  }
}

export default Cards