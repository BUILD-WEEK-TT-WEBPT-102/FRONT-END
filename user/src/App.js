import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Nav from "./components/nav/Nav";
import Home from "./components/home-page/Home";
import SignupForm from "./components/register/SignupForm";
import LogInForm from "./components/register/LogInForm";
import PrivateRoute from "./components/utils/PrivateRoute";
import UserProfile from "./components/userProfile/UserProfile";
import UpdateProfile from "./components/userProfile/UpdateProfile";
import EditPlant from "./components/plants/EditPlant";
import PlantList from "./components/plants/PlantList";
import AddPlant from "./components/plants/AddPlant";

function App() {
  const [plantList, setPlantList] = useState([]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/sign-up" component={SignupForm} />

        <Route path="/sign-in">
          <LogInForm />
        </Route>

        <PrivateRoute exact path="/my-plants">
          <PlantList plantList={plantList} setPlantList={setPlantList} />
        </PrivateRoute>

        <PrivateRoute exact path="/edit-plant/:id">
          <EditPlant plantList={plantList} setPlantList={setPlantList} />
        </PrivateRoute>

        <PrivateRoute exact path="add-plant">
          <AddPlant />
        </PrivateRoute>

        <PrivateRoute path="/my-profile" component={UserProfile} />

        <PrivateRoute path="/update-profile" component={UpdateProfile} />
      </Switch>
    </Router>
  );
}

export default App;
