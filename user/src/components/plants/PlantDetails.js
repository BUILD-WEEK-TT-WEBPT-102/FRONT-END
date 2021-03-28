import React from 'react'

export default function PlantDetails(props) {
  const { text } = props

  return (
    <div>
      <p className='plant-details'>{text}</p>
    </div>
  )
}