import React from 'react';
import { Link } from 'react-router-dom';
import FakeListingCard from './FakeListingCard';

const FakeListingList = props => {
  console.log(props.listing, 'This is in fakelisting LIST.')
  return (
    <>
      {props.listing.map((post, index) => (
        <Link to={`/posts/${post.post_id}`}><FakeListingCard key={post.id} post={post} {...props} />{console.log(post, 'This is in the link')}</Link>
      ))}
    </>
  );
}

export default FakeListingList;