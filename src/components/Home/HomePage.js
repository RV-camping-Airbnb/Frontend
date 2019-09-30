import React from 'react';
import styled, { keyframes } from 'styled-components';
import Hero from '../../images/Hero1.jpg'
import Caravan from '../../images/caravanlogo.svg'
import { zoomIn } from 'react-animations'

// Animations
const zoomInAnimation = keyframes`${zoomIn}`;

// Styling
const MainContainer = styled.div` 
  background-image: url(${Hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  max-width: 500px;
  height: 600px;
  background-color: white;
  border: none;
  border-radius: 10px;
  animation: 1s ${zoomInAnimation};
`;

const Content = styled.div`
  padding: 1% 5%;
`;

const Logo = styled.div`
  background-image: url(${Caravan});
  height: 150px;
  background-repeat: no-repeat;
  background-position: center;
`;

const Header = styled.h1`
  width: 100%;
  margin: 0 auto;
  font-size: 2.5rem;
  text-align: center;
`;

const Line = styled.hr`
  width: 10%;
  border: 3px solid #ff3366;
`;

const Para = styled.p`
  font-size: 1rem;
  text-align: center;
  color: gray;
`;

const CreateButton = styled.button`
  color: #fff;
  background-color: #ff3366;
  width: 80%;
  height: 55px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fc003f;
    transform: scale(1.02);
  }
`;

const BrowseButton = styled.button`
  color: #fff;
  background-color: #3f51b5;
  width: 80%;
  height: 55px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #052af7;
    transform: scale(1.02);
  }
`;

function HomePage(props) {

  function handleCreateButton() {
    props.history.push('/createlisting')
  }

  function handleListingButton() {
    props.history.push('/listings')
  }

  return (
    <MainContainer>
      <ContentContainer>
        <Content> 
          <Header>HAVE A DESTINATION IN MIND?</Header>
          <Logo />
          <Line />
          {/* <Para>Search for a location.</Para> */}
        </Content>
        <CreateButton onClick={handleCreateButton}>
          Create Listing
        </CreateButton>
        <h2> - OR - </h2>
        <BrowseButton onClick={handleListingButton}>
           Browse Listings
        </BrowseButton>
      </ContentContainer>
    </MainContainer>
  )
}

export default HomePage;