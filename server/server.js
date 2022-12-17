const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('buttonClicked', data => {
    console.log('received data:', data);
    io.emit('buttonClicked', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
