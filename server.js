import { Server } from "socket.io";
import app from "./src/app.js";
// import { Server } from "socket.io";
import http from "http";
const port = process.env.PORT;

//wrap express app withh http server
const server = http.createServer(app);

//socket i server setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5175",
    methods:["GET", "POST"],
  },
});


// Socket.IO logic
io.on("connection", (socket) => {
  console.log(`user connected ${socket.id} `);
  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });
  socket.on("disconnect", () => {
    console.log(`user disconnected ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`server connected http://localhost:${port}`);
});
