import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Home/HomePage';
import LoginForm from './components/Login/LoginForm';
import SignUpForm from './components/Login/SignUpForm';
import ListingForm from './components/Listings/ListingForm';

function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/listing' component={ListingForm} />
    </Switch>
    </>
  );
}

export default App;