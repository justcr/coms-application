import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://coms-application.herokuapp.com');

function Button() {
  const glowingButtons = () => {
    const button = document.querySelector('button');
    button.classList.add('glowing');
    setTimeout(() => {
      button.classList.remove('glowing');
    }, 30000);
  }
  const handleClick = () => {
    socket.emit('buttonClicked', { data: 'some data' });
    glowingButtons();
  };

  useEffect(() => {
    socket.on("buttonClicked", (data) => {
      console.log(data);
      glowingButtons();
    })
  }, [])

  return (
    <button onClick={handleClick}></button>
  );
}

export default Button;
