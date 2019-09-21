import React from 'react';

const Favorites = props => (
  <div className="saved-list">
    <h3>Favorite Listings:</h3>
    {props.favoriteList.map(listing => (
      <span className="saved-listing">{listing.title}</span>
    ))}
  </div>
);

export default Favorites;