import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from './components/auth/PrivateRoute';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Home/HomePage';
import LoginForm from './components/Login/LoginForm';
import LogOut from './components/Login/LogOut';
import ResetPassword from './components/Login/ResetPassword';
import SignUpForm from './components/Login/SignUpForm';
import Favorites from './components/Profile/Favorites';
import Profile from './components/Profile/Profile';
import FakeListingList from './components/Listings/FakeListingList';
import FakeListing from './components/Listings/FakeListing';
import Messenger from './components/Profile/Messenger';
import SpeedDialer from './components/Navigation/SpeedDialer';
import { axiosWithoutAuth as axios } from './utils/axiosutils';


function App() {
  const [listing, setListing] = useState([])
  console.log(listing)
  const [favoriteList, setFavoriteList] = useState();
  const [booked, setBooked] = useState(false)
  const [bookedList, setBookedList] = useState();

  useEffect(() => {
    axios()
      .get('/posts')
      .then(res => {
        console.log(res.data)
        setListing(res.data);
      })
      .catch(err => {
        console.error(err, "Did not retrieve data.");
      });
  }, [])
  

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

  const addToBooked = listing => {
    setBooked(true);
  }

  const addToBookedList = listing => {
    setBookedList([...bookedList, listing])
  }

  const deleteBooked = (id) => {
    const updatedList = bookedList.filter((listing) => listing.id !== id)
    setBookedList(updatedList)
  }

  return (
    <>
    <Navigation />
    <Switch>
      {/* <PrivateRoute path='/profile' component={Profile} /> */}
      <Route exact path='/' component={HomePage} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/login' render={props => <LoginForm {...props} /> } />
      <Route path='/logout' component={LogOut} />
      <Route path='/profile' component={Profile} />
      <Route path='/messenger' component={Messenger} />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/favorites' render={props => <Favorites {...props} listing={listing} /> } />
      <Route path='/fakelisting' render={props => <FakeListing {...props} listing={listing} /> } />
      <Route path='/fakelisting/:id' render={props => <FakeListing {...props} listing={listing} /> } />
      <Route path='/fakelistings' render={props => <FakeListingList {...props} listing={listing} addToBooked={addToBooked} addToBookedList={addToBookedList} /> } />
    </Switch>
    <SpeedDialer />
    </>
  );
}

export default App;