import React from 'react'
// We'll need quite a few imports from react-router-dom
import {Route,NavLink,Switch,useParams,useRouteMatch} from 'react-router-dom'
import PlantDetails from './PlantDetails'

export default function Plant(props) {
  // We get ALL items through props. We'll use the URL to find out which item is the one to show.
  const { plants } = props

  // We need to pull plant from plants, using a parameter in the URL (:plantID)
  // Beware! The ids are integers, whereas URL parameters are strings.
  // Beware! The JSX is expecting 'plant' to exist instantly!
  // we use this hook to grab they dynamic parts of the path (:plantID).
  const { plantID } = useParams()
  const plant = plants.find(plant => plant.id === plantID)

  // We use this hook to grab information about the way React Router matched this route.
  const { path, url } = useRouteMatch()

  // This guards against a crash (the data is not available instantaneously)
  if (!plants.length) return 'Getting your plant...'

  return (
    <div className='plant-wrapper'>
      <div className='plant-header'>
        <div className='image-wrapper'>
          <img src={plant.imageUrl} alt={plant.name} />
        </div>
        <div className='plant-title-wrapper'>
          <h2>{plant.name}</h2>
          <h4>${plant.nickName}</h4>
        </div>
      </div>
      <nav className='item-sub-nav'>
        
        {/*
        <NavLink to={`/PlantList/${plant.id}`}>The story</Link>
        <NavLink to={`/plantList/${plant.id}/H2OFrequency`}>H2OFrequency</Link>
        */}
        <NavLink to={`${url}/description`}>Description</NavLink>
        <NavLink to={`${url}/H2OFrequency`}>H20Frequency</NavLink>
      </nav>
      

      {/* Here go the Routes for `<current path>/H20-Frequency` and `<current path>/description` */}
      {/* These Routes should render <ItemDetails />  */}
      <Switch>
        <Route path={`${path}/H2OFrequency`}>
          <PlantDetails text={plant.H20Frequency} />
        </Route>
        <Route path={`${path}/description`}>
          <PlantDetails text={plant.description} />
        </Route>
      </Switch>
      
    </div>
  )
}