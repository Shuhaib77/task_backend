import { Server } from "socket.io";
import app from "./src/app.js";
// import { Server } from "socket.io";
import http from "http";
import Message from "./src/modals/message_modal.js";
import { log } from "console";
const port = process.env.PORT;

//wrap express app withh http server
const server = http.createServer(app);

//socket i server setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5175",
    methods: ["GET", "POST"],
  },
});

// Socket.IO logic
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
  
    socket.on("send_message", async ({ sender, recipient, message }) => {
        
      try {
        const newMessage = await Message.create({ sender, recipient, message });
        io.emit("newMessage", newMessage);
      } catch (err) {
        console.error("Error saving message:", err);
      }
    });
  
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });

server.listen(port, () => {
  console.log(`server connected http://localhost:${port}`);
});
