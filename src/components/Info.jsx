import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './Info.module.css'

function Info() {

  const { id } = useParams()
  let idUrl = `https://rickandmortyapi.com/api/character/${id}`
  const [info, setInfo] = useState([])

  async function infoChar(id) {
    try {
      const response = await fetch(id)
      const data = await response.json()
      return setInfo(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    infoChar(idUrl)
  }, [])

  if (document.title == undefined) { document.title = 'Loading' } else { document.title = info.name }

  if (info === undefined) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className={s.main}>
        <div className={s.card}>
          <h1>{info.name}</h1>
          <a href={info.image} target='_blank' rel='noreferrer'><img src={info.image} alt={info.name} title={info.name} /></a>
          <div className={s.info}>
            <p>Status: {info.status}</p>
            <p>Species: {info.species}</p>
            <p>Origin: {info.origin && info.origin.name}</p>
            <p>Last location: {info.location && info.location.name}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Info
