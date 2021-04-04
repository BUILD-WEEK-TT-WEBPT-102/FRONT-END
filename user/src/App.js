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
    // <PlantContext.Provider value={plantList}>
    //     <Router>
    //       <Switch>
    //         <Route exact path="/" component={Home} />
    //         <Route path="/sign-up" component={SignupForm} />
    //         <Route exact path="/sign-in">
    //           <LogInForm />
    //         </Route>

    //         <PrivateRoute path="/plantlist">
    //           <PlantList plants={plantList} />
    //         </PrivateRoute>

    //         <Route
    //           exact
    //           path="/edit-plant/:id"
    //           render={() => (
    //             <EditPlant plantList={plantList} setPlantList={setPlantList} />
    //           )}
    //         />

    //         <Route>
    //           <AddPlant />
    //         </Route>

    //         <Route
    //           path="/plant-list/:id"
    //           render={(props) => (
    //             <Plant {...props} setPlantList={setPlantList} />
    //           )}
    //         />

    //         <PrivateRoute exact path="/plants/:id">
    //           <Plant plantList={plantList} setPlantList={setPlantList} />
    //         </PrivateRoute>
    //       </Switch>
    //     </Router>
    // </PlantContext.Provider>
    <PlantContext.Provider value={{plantList, setPlantList}}>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/sign-up" component={SignupForm} />

        <Route path="/sign-in">
          <LogInForm />
        </Route>

        <PrivateRoute exact path="/my-plants">
          {/* <PlantList plantList={plantList} setPlantList={setPlantList} /> */}
          <PlantList />
        </PrivateRoute>

        <PrivateRoute exact path="/edit-plant/:id">
          <EditPlant plantList={plantList} UpdatePlantList={setPlantList} />
        </PrivateRoute>

        <PrivateRoute path="/my-profile" component={UserProfile} />

        <PrivateRoute path="/update-profile" component={UpdateProfile} />
      </Switch>
    </Router>
    </PlantContext.Provider>
  );
}

export default App;
