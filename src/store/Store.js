import React, {useReducer } from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext()

const intialState = {
  Gary: [
    {from: 'Gary', msg: 'Is your property available?'},
    {from: 'Gary', msg: 'Is it okay to arrive around 4PM?'},
  ],
  Michele: [
    {from: 'Michele', msg: 'How does the 28th look?'},
    {from: 'Michele', msg: 'Thank you for reaching out!'},
  ]
}

function reducer(state, action) {
  const { user, from, msg } = action.payload;
  switch(action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        [user]: [...state[user],
          {from, msg}
        ]
      }
    default: 
      return state
  }
}

function sendChatAction(value) {
  socket.emit('chat message', value )
}

let socket;

export default function Store(props) {

  const [allChats, dispatch] = useReducer(reducer, intialState)

  if (!socket) {
    socket = io(':3001');
    socket.on('chat message', function(msg) {
      dispatch({ type: 'RECEIVE_MESSAGE', payload: msg });
    });
  }

  const user = 'Nick' + Math.random(100).toFixed(2);

  return (
    <CTX.Provider value={{allChats, sendChatAction, user}}>
      {props.children}
    </CTX.Provider>
  )
}