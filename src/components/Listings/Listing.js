import React, { useState, useEffect } from 'react';
import { axiosWithoutAuth as axios} from '../../utils/axiosutils';
import ListingCard from './ListingCard';
import LoadingOverlay from 'react-loading-overlay';
import styled from 'styled-components';

const Loading = styled.div`
  width: 100%;
  height: 100vh;
`;

const Listing = (props) => {
  const [post, setPost] = useState();
  console.log(props.listing)
  console.log(props)
 
  useEffect(() => {
    const id = props.match.params.id;

      axios()
      .get(`/posts/${id}`)
      .then(response => {
        console.log(response.data, "Gathering a single post id.")
        setPost(response.data);
      })
      .catch(error => {
        console.error(error, "There was an issue retrieving the data.");
      });

  },[props.match.params.id]);
  
  const bookListing = () => {
    const addToBookedList = props.addToBookedList;
    addToBookedList(post)
  }

  let isActive = true;

  if (!post) {
    return (
    <LoadingOverlay
    active={isActive}
    spinner
    text="Loading listings..."><Loading /></LoadingOverlay>
    )}

  return (
    <div className="book-wrapper">
      <ListingCard key={post.post_id} post={post} {...props} bookListing={bookListing} />
    </div>
  );
}

export default Listing;