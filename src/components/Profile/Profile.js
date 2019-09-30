import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import RV3 from '../../images/rv3.jpg';
import StripePayment from '../Payments/StripePayment';
import Favorites from './Favorites';
import BookListing from '../Listings/BookListing';

const Background = styled.div` 
  display: flex;
  align-items: center;
  height: 90vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100vh;
  background-color: #3f51b5;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    justify-content: center;
  }
`;

const Dashboard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  height: 100vh;
`;

const Card = styled.div`
  border: none;
  box-shadow: 1px 3px 5px;
  margin: 2% auto;
  min-width: 400px;
  max-width: 800px;
  width: 100%;
  min-height: 450px;
  max-height: 450px;
  padding: 2% 2% 10%;
  overflow: hidden;
  text-align: center;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  margin-top: 5%;
  padding: 5%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  width: 100%;
  margin-top: 1%;
  @media (max-width: 768px) {
    margin-top: 5%;
  }
`;

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid black;
    border-radius: 100%;
    background-image: url(${RV3});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

function Profile(props) {

  return (
    <Background>
      <Bio>
        <ImageContainer>
          <Avatar />
        </ImageContainer>
        <ContentContainer>
          <h1>Nick Durbin</h1>
          <h3>Akron, Ohio</h3>
          <h4>RV Owner</h4>
          <h4>Land Owner</h4>
          <Rating name="half-rating" value={4.5} precision={0.5} />
        </ContentContainer>
      </Bio>
      <Dashboard>
        <Link to='/favorites'>
          <Card>
            <h1>Favorite Listings</h1>
            <Favorites {...props} favoriteList={props.favoriteList} />
          </Card>
        </Link>
        <Link to='/booking'>
        <Card>
          <h1>Booked Listings</h1>
          <BookListing {...props} bookedList={props.bookedList}/>
        </Card>
        </Link>
        <Link to='/checkout'>
        <Card>
          <h1>Ready For Checkout</h1>
          <StripePayment />
        </Card>
        </Link>
      </Dashboard>
    </Background>
  )
}

export default Profile;