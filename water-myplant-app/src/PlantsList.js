import React from 'react'
// We'll need a Link and the useLocation hook from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'

export default function PlantsList(props) {
  const { plants } = props
  const { pathname } = useLocation()

  // We'll grab the current URL using the hook

  return (
    <div className='plants-list-wrapper'>
      {plants.map(plant => (
        <div
          className='plant-card'
          key={plant.id}
        >
          {/* Link starts, navigates us from <current url> to <current url>/<id of the plant> */}
          <Link to={`${pathname}/${plant.id}`}>
            <img
              className='plants-list-image'
              src={plant.imageUrl}
              alt={plant.name}
            />
            <p>{plant.species}</p>
          </Link>

          <p>${plant.nickName}</p>
        </div>
      ))}
    </div>
  )
}
