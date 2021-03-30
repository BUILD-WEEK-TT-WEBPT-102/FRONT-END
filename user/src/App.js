import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./components/home-page/Home";
import SignupForm from "./components/register/SignupForm";
import LogInForm from "./components/register/LogInForm";
import PrivateRoute from "./components/utils/PrivateRoute";
import PlantTest from "./components/plants/PlantTest";
import UserProfile from "./components/userProfile/UserProfile";
import UpdateProfile from "./components/userProfile/UpdateProfile";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignupForm} />
        <Route exact path="/sign-in">
          <LogInForm />
        </Route>
        <PrivateRoute exact path="/my-plants">
          <PlantTest />
        </PrivateRoute>
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
