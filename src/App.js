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
import SpeedDialer from './components/Navigation/SpeedDialer';
import { data, listings } from './components/Profile/Data';

function App() {
  const [listing, setListing] = useState(data)
  const [favoriteList, setFavoriteList] = useState(listings);

  const addToFavoritesList = listing => {
    const updatedList = (favoriteList.find(el => el.id === listing.id))

    if (!updatedList.isFavorited) {
      listing.isFavorited = true;
      setFavoriteList( [...favoriteList, listing] );
    } else if (updatedList && listing.isFavorited === true) {
      listing.isFavorited = false;
      deleteFavorite()
    } else if (updatedList && listing.isFavorited === false) {
      listing.isFavorited = true;
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
      {/* <Route path='/listings' component={Listings} /> */}
      <Route path='/login' render={props => <LoginForm {...props} /> } />
      <Route path='/logout' component={LogOut} />
      <Route path='/profile' component={Profile} />
      <Route path='/sendmessage' render={props => <SendMessage {...props} addToFavoritesList={addToFavoritesList} listing={listing} favoriteList={favoriteList} /> } />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/favorites' render={props => <Favorites {...props} deleteFavorite={deleteFavorite} listing={listing} favoriteList={favoriteList} /> } />
    </Switch>
    <SpeedDialer />
    </>
  );
}

export default App;