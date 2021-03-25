import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import PlantList from './components/PlantList'
import EditPlant from './components/EditPlant'

function App() {
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    axios
      .get()
      .then(res => setPlantList(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Water My Plants (temporary)</h1>
      {/* these need to routed  */}
      <PlantList plants={plantList}/>
      <EditPlant plantList={plantList} setPlantList={setPlantList}/>
    </div>
  );
}

export default App;
