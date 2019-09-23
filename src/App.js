import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Home/HomePage';
import LoginForm from './components/Login/LoginForm';
import LogOut from './components/Login/LogOut';
import ResetPassword from './components/Login/ResetPassword';
import SignUpForm from './components/Login/SignUpForm';
import Favorites from './components/Profile/Favorites';
import Profile from './components/Profile/Profile';
// import Listings from './components/Listings/Listings';
import SendMessage from './components/Profile/SendMessage';
import SpeedDialer from './components/Navigation/SpeedDialer'

function App() {

  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/reset-password' component={ResetPassword} />
      {/* <Route path='/listings' component={Listings} /> */}
      <Route path='/login' render={props => <LoginForm {...props} /> } />
      <Route path='/logout' component={LogOut} />
      <Route path='/profile' component={Profile} />
      <Route path='/sendmessage' component={SendMessage} />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/favorites' render={props => <Favorites {...props} />} />
    </Switch>
    <SpeedDialer />
    </>
  );
}

export default App;