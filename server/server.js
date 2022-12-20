const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("buttonClicked", (data) => {
    console.log("received data:", data);
    socket.broadcast.emit("buttonClicked", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
