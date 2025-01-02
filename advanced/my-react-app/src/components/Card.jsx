import React from 'react'

const Card = ({title, subtitle}) => {
  return (
    <div className='card'>
        <h1>{title}</h1>
        <span className='subtitle'>{subtitle}</span>
    </div>
  )
}

export default Card