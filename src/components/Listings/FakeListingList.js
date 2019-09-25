import React from 'react';
import { Link } from 'react-router-dom';
import FakeListingCard from './FakeListingCard';

const FakeListingList = props => {
  console.log(props.listing, 'This is in fakelisting LIST.')
  return (
    <>
      {props.listing.map((post, index) => (
        <Link to={`/fakelisting/${post.id}`}><FakeListingCard key={post.post_id} post={post} {...props} /></Link>
      ))}
    </>
  );
}

export default FakeListingList;