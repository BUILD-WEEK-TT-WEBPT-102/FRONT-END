import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home-page/Home";
import SignupForm from "./components/register/SignupForm";
import LogInForm from "./components/register/LogInForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlantTest from "./components/plants/PlantTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignupForm} />
        <Route path="/sign-in" component={LogInForm} />
        <PrivateRoute exact path="/my-plants" component={PlantTest} />
      </Switch>
    </Router>
  );
}

export default App;
