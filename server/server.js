const { createServer } = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  // console.log("a user connected");

  socket.on("buttonClicked", (data) => {
    console.log("received data:", data);
    socket.broadcast.emit("buttonClicked", data);
  });

  socket.on("disconnect", () => {
    // console.log("user disconnected");
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});