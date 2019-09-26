import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const PrivateNavigation = ({ component: Component, ...rest }) => {
  if (localStorage.getItem("token")) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Navigation />;
  }
};

export default PrivateNavigation;