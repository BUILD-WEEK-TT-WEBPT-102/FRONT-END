import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("authToken")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/sign-in" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
