import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import BgImage from '../../images/bgImage.jpg';
import RV3 from '../../images/rv3.jpg';

const Background = styled.div` 
  display: flex;
  align-items: center;
  height: 90vh;
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 90vh;
  background-color: #3f51b5;
  color: white;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 25%;
  margin: 10% auto 5%;
`;

const Avatar = styled.img`
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 100%;
    background-image: url(${RV3});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

function Profile() {

  return (
    <Background>
      <Bio>
        <ImageContainer>
          <Avatar />
        </ImageContainer>
        <h1>Nick Durbin</h1>
        <h3>Akron, Ohio</h3>
        <h4>RV Owner</h4>
        <h4>Land Owner</h4>
        <Rating name="half-rating" value={4.5} precision={0.5} />
      </Bio>
    </Background>
  )
}

export default Profile;