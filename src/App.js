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
import Favorites from './components/Profile/Favorites';
import BookListing from './components/Listings/BookListing';
import Profile from './components/Profile/Profile';
import ListingList from './components/Listings/ListingList';
import Listing from './components/Listings/Listing';
import Messenger from './components/Profile/Messenger';
import SpeedDialer from './components/Navigation/SpeedDialer';
import { axiosWithoutAuth as axios } from './utils/axiosutils';
import { data, listings } from './components/Profile/Data';
import StripePayment from './components/Payments/StripePayment';


function App() {
  const [listing, setListing] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [booked, setBooked] = useState(false);
  const [bookedList, setBookedList] = useState([]);

  useEffect(() => {
    axios()
      .get('/posts')
      .then(res => {
        console.log(res.data, "I am the data in the axios call in App.js")
        setListing(res.data);
      })
      .catch(err => {
        console.error(err, "Did not retrieve data.");
      });
  }, [])
  
  const addToFavoritesList = listing => {
    const updatedList = (favoriteList.includes(el => el.id === listing.post_id))
    console.log(updatedList)

    if (!updatedList) {
      setFavoriteList( [...favoriteList, listing] );
    }
  }

  const deleteFavorite = (id) => {
    const updatedList = favoriteList.filter((listing) => listing.post_id !== id)
    setFavoriteList(updatedList)
  }

  const addToBooked = listing => {
    setBooked(true);
  }

  const addToBookedList = listing => {
    const updatedBookedList = (bookedList.includes(el => el.id === listing.post_id))

    if (!updatedBookedList) {
      setBookedList([...bookedList, listing])
    }
  }

  const deleteBooked = (id) => {
    const updatedBookedList = bookedList.filter((listing) => listing.post_id !== id)
    setBookedList(updatedBookedList)
  }

  return (
    <>
    <Navigation />
    <Switch>
  
      <Route path='/profile' render={props => <Profile {...props} favoriteList={favoriteList} listing={listing} bookedList={bookedList} /> } />
      <Route path='/favorites' render={props => <Favorites {...props} listing={listing} addToFavoritesList={addToFavoritesList} favoriteList={favoriteList} deleteFavorite={deleteFavorite}/> } />
      <Route path='/booking' render={props => <BookListing {...props} listing={listing} bookedList={bookedList} deleteBooked={deleteBooked} booked={booked} addToBookedList={addToBookedList} /> } />
      <Route path='/messenger' component={Messenger} />
      <Route path='/createlisting' component={ListingForm} />
      <Route path='/checkout' render={props => <StripePayment {...props} listing={listing} bookedList={bookedList} deleteBooked={deleteBooked} booked={booked}/> } />
      
      <Route exact path='/' render={props => <HomePage {...props} />} />
      <Route path='/listings/:id' render={props => <Listing {...props} listing={listing} setListing={setListing} bookedList={bookedList} addToBookedList={addToBookedList} addToFavoritesList={addToFavoritesList} favoriteList={favoriteList} deleteFavorite={deleteFavorite} />} />
      <Route path='/listings' render={props => <ListingList {...props} listing={listing} addToBookedList={addToBookedList} bookedList={bookedList} addToFavoritesList={addToFavoritesList} favoriteList={favoriteList} deleteFavorite={deleteFavorite} /> } />
      
      <Route path='/login' render={props => <LoginForm {...props} /> } />
      <Route path='/logout' component={LogOut} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/signup' component={SignUpForm} />
    
    </Switch>
    <SpeedDialer />
    </>
  );
}

export default App;