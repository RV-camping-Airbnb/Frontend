import React from 'react';
import SendMessage from './SendMessage';
import Store from '../../store/Store';

function Messenger() {
  return (
    <div>
      <Store>
        <SendMessage />
      </Store>
    </div>
  );
}

export default Messenger;