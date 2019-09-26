import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  if (localStorage.getItem("token")) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to='/login' />;
  }
};

export default PrivateRoute;