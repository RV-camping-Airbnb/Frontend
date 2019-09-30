import React from 'react';
import { Link } from 'react-router-dom';
import ListingCard from './ListingCard';

const ListingList = props => {
  console.log(props.listing, 'This is in Listing LIST.')
  return (
    <>
      {props.listing.map((post, index) => (
        <Link to={`/listings/${post.post_id}`}><ListingCard key={index} post={post} {...props} />{console.log(post, 'This is in the link')}</Link>
      ))}
    </>
  );
}

export default ListingList;