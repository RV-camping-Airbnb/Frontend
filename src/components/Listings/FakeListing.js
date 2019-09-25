import React, { useState, useEffect } from 'react';
import { axiosWithoutAuth as axios} from '../../utils/axiosutils';
import FakeListingCard from './FakeListingCard';

const FakeListing = (props) => {
  const [listing, setListing] = useState();
  console.log(props.listing)
  console.log(props)
 
  useEffect(() => {
    const id = props.match.params.id;

      axios()
      .get(`/posts/${id}`)
      .then(response => {
        console.log(response.data, "Gathering a single post id.")
        setListing(response.data);
      })
      .catch(error => {
        console.error(error, "There was an issue retrieving the data.");
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