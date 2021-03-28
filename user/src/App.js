import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home-page/Home";
import SignupForm from "./components/register/SignupForm";
import LogInForm from "./components/register/LogInForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlantTest from "./components/plants/PlantTest";
import UserProfile from "./components/userProfile/UserProfile";
import UpdateProfile from "./components/userProfile/UpdateProfile";

function App() {
  const [userId, setUserId] = useState(4);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignupForm} />
        <Route
          exact
          path="/sign-in"
          render={(props) => (
            <LogInForm {...props} userId={userId} setUserId={setUserId} />
          )}
        />
        <PrivateRoute
          exact
          path="/my-plants"
          render={(props) => <PlantTest {...props} userId={userId} />}
        />
        <PrivateRoute exact path="/profile/:id" component={UserProfile} />
        <PrivateRoute
          exact
          path="/update-profile/:id"
          component={UpdateProfile}
        />
      </Switch>
    </Router>
  );
}

export default App;
