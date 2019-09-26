import React from 'react';
import styled from 'styled-components';
import Hero from '../../images/Hero1.jpg'
import { Link } from 'react-router-dom';

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
  height: 500px;
  background-color: white;
  border: none;
  border-radius: 10px;
`;

const Content = styled.div`
  padding: 1% 5%;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 5%;
`;

function HomePage() {

  return (
    <MainContainer>
      <ContentContainer>
        <Content>
          <Header>HAVE A DESTINATION IN MIND?</Header>
          <Line />
          <Para>Search for a location.</Para>
        </Content>
        <CreateButton>
          <Link to='/createlisting'>
            Create Listing
          </Link>
        </CreateButton>
        <h2> - OR - </h2>
        <BrowseButton>
          <Link to='/listings'>
           Browse Listings
          </Link>
        </BrowseButton>
      </ContentContainer>
    </MainContainer>
  )
}

export default HomePage;