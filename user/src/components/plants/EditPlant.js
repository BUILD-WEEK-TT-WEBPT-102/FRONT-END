import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

const EditPlant = () => {
  const [plant, setPlant] = useState({
    nickname: "",
    species: "",
    h2oFrequency: "",
  });

  const { id } = useParams()
  const history = useHistory();

  useEffect(() => {
      axios
        .get()
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }, [id])

  const handleChanges = e => {
      e.persist();
      setPlant({
          ...plant,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    axios
        .put(``, plant)
        .then(res => {
            props.setPlantList(
                props.plantList.map(plant => {
                    if (plant.id === res.data.id) {
                        return res.data;
                    } else {
                        return plant
                    }
                })
            )
        })
        .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Edit Plant</h2>
      <form onSubmit={}>
        <input
          type="text"
          name="nickname"
          onChange={}
          placeholder="nickname"
          value={plant.nickname}
        />
        <input
          type="text"
          name="species"
          onChange={}
          placeholder="species"
          value={plant.species}
        />
        <input
          type="text"
          name="h2oFrequency"
          onChange={}
          placeholder="h2oFrequency"
          value={plant.h2oFrequency}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditPlant;