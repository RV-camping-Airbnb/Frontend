import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Home/HomePage';
import ListingForm from './components/Listings/ListingForm';
import LoginForm from './components/Login/LoginForm';
import LogOut from './components/Login/LogOut';
import ResetPassword from './components/Login/ResetPassword';
import SignUpForm from './components/Login/SignUpForm';
import ListingForm from './components/Listings/ListingForm';
import Favorites from './components/Profile/Favorites';
import BookListing from './components/Listings/BookListing';
import Profile from './components/Profile/Profile';
import FakeListingList from './components/Listings/FakeListingList';
import FakeListing from './components/Listings/FakeListing';
import Messenger from './components/Profile/Messenger';
import SpeedDialer from './components/Navigation/SpeedDialer';
import { axiosWithoutAuth as axios } from './utils/axiosutils';
import { data, listings } from './components/Profile/Data';


function App() {
  const [listing, setListing] = useState([]);
  console.log(listing, "I am in App.js")
  const [favoriteList, setFavoriteList] = useState(listings);
  const [booked, setBooked] = useState(false);
  const [bookedList, setBookedList] = useState(data);

  useEffect(() => {
    axios()
      .get('/listings')
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
    addToBooked()
  }

  const deleteBooked = (id) => {
    const updatedList = bookedList.filter((listing) => listing.id !== id)
    setBookedList(updatedList)
  }

  return (
    <>
    <Navigation />
    <Switch>
      <PrivateRoute path='/profile' component={Profile} />
      <Route exact path='/' component={HomePage} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/login' render={props => <LoginForm {...props} /> } />
      <Route path='/logout' component={LogOut} />
      <Route path='/createlisting' component={ListingForm} />
      <Route path='/messenger' component={Messenger} />
      <Route path='/signup' component={SignUpForm} />
      <Route path='/listing' component={ListingForm} />
      <Route path='/favorites' render={props => <Favorites {...props} listing={listing} /> } />
      <Route path='/fakelisting' render={props => <FakeListing {...props} listing={listing} /> } />
      <Route path='/fakelisting/:id' render={props => <FakeListing {...props} listing={listing} /> } />
      <Route path='/fakelistings' render={props => <FakeListingList {...props} listing={listing} addToBooked={addToBooked} addToBookedList={addToBookedList} /> } />
      <Route path='/favorites' render={props => <Favorites {...props} listing={listing} addToFavoritesList={addToFavoritesList} favoriteList={favoriteList} deleteFavorite={deleteFavorite}/> } />
      <Route path='/booking' render={props => <BookListing {...props} listing={listing} bookedList={bookedList} deleteBooked={deleteBooked} booked={booked}/> } />
      <Route path='/listings/:id' render={props => <FakeListing {...props} listing={listing} setListing={setListing} booked={booked} />} />
      <Route path='/listings' render={props => <FakeListingList {...props} listing={listing} addToBooked={addToBooked} addToBookedList={addToBookedList} booked={booked} /> } />
    </Switch>
    <SpeedDialer />
    </>
  );
}

export default App;