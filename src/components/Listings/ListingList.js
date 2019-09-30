import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ListingCard from './ListingCard';
import styled from 'styled-components';

const ListingList = props => {
  const [search, setSearch] = useState('');
  const inputStyle = {
    display: 'block',
    width: '20%',
    padding: '.5%',
    height: '45px',
    margin: 'auto',
    fontSize: '.8rem',
    borderRadius: '5px',
    border: '1px black solid'
  }
  const h1Style = {
    textAlign: 'center',

  }
  console.log(props.listing, 'This is in Listing LIST.')
  return (
    <>
    <h1 style={h1Style}>Search Listings: </h1><input style={inputStyle}
    placeholder='Mountain, beach, wooded area, etc.' onChange={event => 
      setSearch(event.target.value)}/>
      {props.listing.map((post, index) => (
        <Link to={`/listings/${post.post_id}`}><ListingCard key={index}  post={post} {...props} />{console.log(post, 'This is in the link')}</Link>))
              .filter(item => {       
                return item.props.children[0].props.post.description.toLowerCase().includes(search.toLowerCase());
              })}
    </>
  );
}

export default ListingList;