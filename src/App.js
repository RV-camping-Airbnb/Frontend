import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Home/HomePage';
// import ListingForm from './components/Listings/ListingForm';
import ListingsPage from './components/Listings/ListingsPage';
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


function App() {
  const [listing, setListing] = useState([]);
  const [favoriteList, setFavoriteList] = useState(listings);
  const [booked, setBooked] = useState(false);
  const [bookedList, setBookedList] = useState(data);
  console.log(listings, data, "I am in App.js")

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
    const updatedList = (favoriteList.includes(el => el.id === listing.id))
    console.log(updatedList)

    if (!updatedList) {
      setFavoriteList( [...favoriteList, listing] );
    }
  }

  const deleteFavorite = (id) => {
    const updatedList = favoriteList.filter((listing) => listing.id !== id)
    setFavoriteList(updatedList)
  }

  const addToBooked = listing => {
    setBooked(true);
  }

  const addToBookedList = listing => {
    const updatedBookedList = (bookedList.includes(el => el.id === listing.id))

    if (!updatedBookedList) {
      setBookedList([...bookedList, listing])
    }
  }

  const deleteBooked = (id) => {
    const updatedBookedList = bookedList.filter((listing) => listing.id !== id)
    setBookedList(updatedBookedList)
  }

  return (
    <>
    <Navigation />
    <Switch>
  

      <PrivateRoute path='/profile' component={Profile} />
      <Route path='/favorites' render={props => <Favorites {...props} listing={listing} addToFavoritesList={addToFavoritesList} favoriteList={favoriteList} deleteFavorite={deleteFavorite}/> } />
      <Route path='/booking' render={props => <BookListing {...props} listing={listing} bookedList={bookedList} deleteBooked={deleteBooked} booked={booked}/> } />
      <Route path='/messenger' component={Messenger} />
      <PrivateRoute path='/createlisting' component={ListingForm} />
      

      <Route exact path='/' render={props => <HomePage {...props} />} />
      <Route path='/listings/:id' render={props => <Listing {...props} listing={listing} setListing={setListing} bookedList={bookedList} addToBookedList={addToBookedList} addToFavoritesList={addToFavoritesList} favoriteList={favoriteList} deleteFavorite={deleteFavorite} />} />
      <Route path='/listings' render={props => <ListingList {...props} listing={listing} addToBookedList={addToBookedList} bookedList={bookedList} addToFavoritesList={addToFavoritesList} favoriteList={favoriteList} deleteFavorite={deleteFavorite} /> } />
      
      
      <Route path='/login' render={props => <LoginForm {...props} /> } />
      <Route path='/logout' component={LogOut} />
      <Route path='/reset-password' component={ResetPassword} />
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
      <Route path='/listingspage' component={ListingsPage} />
    </Switch>
    <SpeedDialer />
    </>
  );
}

export default App;