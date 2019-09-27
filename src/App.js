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
import { axiosWithoutAuth as axios } from './utils/axiosutils';
import { data, listings } from './components/Profile/Data';


function App() {
  const [listing, setListing] = useState([]);
  const [favoriteList, setFavoriteList] = useState(listings);
  const [booked, setBooked] = useState(false);
  const [bookedList, setBookedList] = useState(data);
  console.log(listings, data)

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
      <Route path='/favorites' render={props => <Favorites {...props} listing={listing} addToFavoritesList={addToFavoritesList} favoriteList={favoriteList} deleteFavorite={deleteFavorite}/> } />
      <Route path='/booking' render={props => <BookListing {...props} listing={listing} bookedList={bookedList} deleteBooked={deleteBooked} booked={booked}/> } />
      <PrivateRoute path='/messenger' component={Messenger} />
      <PrivateRoute path='/createlisting' component={ListingForm} />
      

      <Route exact path='/' render={props => <HomePage {...props} />} />
      <Route path='/listings/:id' render={props => <Listing {...props} listing={listing} setListing={setListing} booked={booked} />} />
      <Route path='/listings' render={props => <ListingList {...props} listing={listing} addToBooked={addToBooked} addToBookedList={addToBookedList} booked={booked} /> } />
      
      
      <Route path='/login' render={props => <LoginForm {...props} /> } />
      <Route path='/logout' component={LogOut} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/signup' component={SignUpForm} />

    </Switch>
    </>
  );
}

export default App;