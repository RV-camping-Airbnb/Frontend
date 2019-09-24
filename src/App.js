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
import FakeListings from './components/Listings/FakeListings';
import Messenger from './components/Profile/Messenger';
import SpeedDialer from './components/Navigation/SpeedDialer';
import { data, listings } from './components/Profile/Data';

function App() {
  const [listing, setListing] = useState(data)
  const [favoriteList, setFavoriteList] = useState(listings);

  const addToFavoritesList = listing => {
    const updatedList = (favoriteList.includes(el => el.id === listing.id))
    console.log(updatedList)

    if (!updatedList.isFavorited) {
      listing.isFavorited = true;
      setFavoriteList( [...favoriteList, listing] );
    } else {
      listing.isFavorited = false;
      setFavoriteList( [...favoriteList, listing] );
    } 
  }

  const deleteFavorite = (id) => {
    const updatedList = favoriteList.filter((listing) => listing.id !== id)
    listing.isFavorited = false;
    setFavoriteList(updatedList)
  }

  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/listings' render={props => <FakeListings {...props} addToFavoritesList={addToFavoritesList} listing={listing} favoriteList={favoriteList} /> } />/>
      <Route path='/login' render={props => <LoginForm {...props} /> } />
      <Route path='/logout' component={LogOut} />
      <Route path='/profile' component={Profile} />
      <Route path='/messenger' component={Messenger} />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/favorites' render={props => <Favorites {...props} deleteFavorite={deleteFavorite} listing={listing} favoriteList={favoriteList} /> } />
    </Switch>
    <SpeedDialer />
    </>
  );
}

export default App;