import React, { useState } from 'react';

const Favorites = (props) => {
  const [listing, setListing] = useState();
 
  const saveListing = () => {
    const addToFavoritesList = props.addToFavoritesList;
    addToFavoritesList(listing)
  }

  return (
    <div className="saved-list">
      <h3>Favorite Listings:</h3>
      {props.favoriteList.map(listing => (
        <div>
          <span className="saved-listing">{listing.title}</span>
          <button className="save-button" onClick={() => saveListing()}>Save</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;