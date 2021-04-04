import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./components/home-page/Home";
import SignupForm from "./components/register/SignupForm";
import LogInForm from "./components/register/LogInForm";
import PrivateRoute from "./components/utils/PrivateRoute";
import UserProfile from "./components/userProfile/UserProfile";
import UpdateProfile from "./components/userProfile/UpdateProfile";
import EditPlant from "./components/plants/EditPlant";
import PlantList from "./components/plants/PlantList";
import { PlantContext } from "./components/contexts/PlantContext";

function App() {
  const [plantList, setPlantList] = useState([]);

  return (
    <PlantContext.Provider value={{ plantList, setPlantList }}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/sign-up" component={SignupForm} />

          <Route path="/sign-in" component={LogInForm} />

          <PrivateRoute exact path="/my-plants" component={PlantList} />

          <PrivateRoute exact path="/edit-plant/:id" component={EditPlant} />

          <PrivateRoute path="/my-profile" component={UserProfile} />

          <PrivateRoute path="/update-profile" component={UpdateProfile} />
        </Switch>
      </Router>
    </PlantContext.Provider>
  );
}

export default App;
