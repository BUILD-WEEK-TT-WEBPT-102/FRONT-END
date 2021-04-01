import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Nav from "./components/nav/Nav";
import Home from "./components/home-page/Home";
import SignupForm from "./components/register/SignupForm";
import LogInForm from "./components/register/LogInForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Plant from "./components/plants/Plant";
import EditPlant from "./components/plants/EditPlant";
import PlantList from "./components/plants/PlantList";
import AddPlant from "./components/plants/AddPlant";

function App() {
  const [plantList, setPlantList] = useState([]);

  const getPlantList = () => {
    axios
      .get("https://backend-u4-ttwebpt102.herokuapp.com/api/plants")
      .then((res) => {
        setPlantList(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPlantList();
  }, []);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignupForm} />
        <Route exact path="/sign-in">
          <LogInForm />
        </Route>
        <PrivateRoute path="/plantlist">
          <PlantList plants={plantList} />
        </PrivateRoute>

        <Route
          exact
          path="/edit-plant/:id"
          render={() => (
            <EditPlant plantList={plantList} setPlantList={setPlantList} />
          )}
        />

        <Route>
          <AddPlant />
        </Route>

        <Route
          path="/plant-list/:id"
          render={(props) => <Plant {...props} setPlantList={setPlantList} />}
        />

        <PrivateRoute exact path="/plants/:id">
          <Plant plantList={plantList} setPlantList={setPlantList} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
