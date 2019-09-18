import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={WelcomePage} />
    </Switch>
    </>
  );
}

export default App;