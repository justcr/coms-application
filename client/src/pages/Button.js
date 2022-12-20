import './Button.css'
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Button() {
  const flashButtons = () => {
    const button = document.querySelector('button');
    button.classList.add('flash');
    setTimeout(() => {
      button.classList.remove('flash');
    }, 2000);
  }
  const handleClick = () => {
    socket.emit('buttonClicked', { data: 'some data' });
    flashButtons();
  };

  useEffect(() => {
    socket.on("buttonClicked", (data) => {
      console.log(data);
      flashButtons();
    })
  }, [])

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}

export default Button;
