import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

<<<<<<< HEAD
import Nav from "./components/nav/Nav";
import Home from "./components/home-page/Home";
import SignupForm from "./components/register/SignupForm";
import LogInForm from "./components/register/LogInForm";
import PrivateRoute from "./components/utils/PrivateRoute";
import PlantTest from "./components/plants/PlantTest";
import UserProfile from "./components/userProfile/UserProfile";
import UpdateProfile from "./components/userProfile/UpdateProfile";
=======
import Home from "./components/home-page/Home";
import SignupForm from "./components/register/SignupForm";
import LogInForm from "./components/register/LogInForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlantTest from "./components/plants/PlantTest";
>>>>>>> main

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignupForm} />
<<<<<<< HEAD
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
=======
        <Route path="/sign-in" component={LogInForm} />
        <PrivateRoute exact path="/my-plants" component={PlantTest} />
>>>>>>> main
      </Switch>
    </Router>
  );
}

export default App;
