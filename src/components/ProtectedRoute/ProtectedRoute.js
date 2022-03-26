import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { getJoined } from "../../selectors/selectors";


const ProtectedRoute = ({ component: Component, isItAnAuthorizationComponent, path, redirectPath, ...props }) => {

  const joined = useSelector(getJoined) 

  return (
    <Route path={path}>
      {
        isItAnAuthorizationComponent ? 
        () => !joined ? <Component {...props} /> : <Redirect to={redirectPath} />
        :
        () => joined ? <Component {...props} /> : <Redirect to={redirectPath} />
      }
    </Route>
  );
};

export default ProtectedRoute;