import React from 'react';
import SendMessage from './SendMessage';
import Store from '../../store/Store';
import BgImage from '../../images/bgImage.jpg';
import styled from 'styled-components';

const Background = styled.div` 
  background-image: url(${BgImage});
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  background-size: cover;
`;

function Messenger() {
  return (
    <Background>
      <Store>
        <SendMessage />
      </Store>
    </Background>
  );
}

export default Messenger;