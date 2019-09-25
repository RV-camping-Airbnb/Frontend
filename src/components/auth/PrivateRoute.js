import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  if (isAuth) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to='/login' />;
  }
};

export default PrivateRoute;