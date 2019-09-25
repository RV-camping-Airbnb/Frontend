import React from 'react';
import { Link } from 'react-router-dom';
import FakeListingCard from './FakeListingList';

const FakeListingList = props => {
  return (
    <div className="listing-list">
      {props.listings.map(listing => (
        <Link to={`/listing/${listing.id}`}><FakeListingCard key={listing.id} listing={listing} /></Link>
      ))}
    </div>
  );
}

export default FakeListingList;