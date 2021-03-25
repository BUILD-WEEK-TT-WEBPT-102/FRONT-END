import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./components/register/Signup";
import Signin from "./components/register/Signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/sign-in" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
