import React from 'react'
import './Pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Pagination({ onPrev, onNext, prev, next }) {

  const handleNext = () => {
    onNext()
  }
  const handlePrev = () => {
    onPrev()
  }

  return (
    <div>
      {
        next ? <FontAwesomeIcon icon={faAngleRight} onClick={handleNext} className='right-arrow' /> : null
      }
      {
        prev ? <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrev} className='left-arrow' /> : null
      }
    </div>
  )
}

export default Pagination