import './Button.css'
import React from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function Button() {
  const handleClick = () => {
    const button = document.querySelector('button');
    button.classList.add('flash');
    socket.emit('buttonClicked', { data: 'some data' });
    setTimeout(() => {
      button.classList.remove('flash');
    }, 2000);
  };

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}

export default Button;
