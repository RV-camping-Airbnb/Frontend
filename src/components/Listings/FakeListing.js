import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FakeListingCard from './FakeListingCard';

const FakeListing = (props) => {
  const [listing, setMovie] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;

      axios
      .get(`/listing/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  },[props.match.params.id]);
  
  const bookListing = () => {
    const addToBookedList = props.addToBookedList;
    addToBookedList(listing)
  }

  if (!listing) {
    return <div>Loading listing information...</div>;
  }

  return (
    <div className="book-wrapper">
      <FakeListingCard key={listing.id} listing={listing} />
      <div className="book-button" onClick={() => bookListing()}>Book</div>
    </div>
  );
}

export default FakeListing;