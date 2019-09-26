import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import BgImage from '../../images/bgImage.jpg';
import RV3 from '../../images/rv3.jpg';

const Background = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  border: none;
  border-radius: 10px;
  width: 25%;
  height: 500px;
`;

const BigAvatar = styled.img`
    margin-top: -100px;
    width: 60%;
    height: 50%;
    background-color: gray;
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
        <BigAvatar />
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