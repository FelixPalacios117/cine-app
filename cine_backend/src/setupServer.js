const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const { routes } = require("./routes");
const { authenticate } = require("./middlewares/auth");
const { encrypt, decrypt } = require('./middlewares/rsa')
const { Server: socketServer } = require("socket.io");

const setupServer = async () => {
  var server = express();
  server.use("/uploads", express.static("uploads"));
  Middleware(server);
  routes(server);
  await startServer(server);
};
const Middleware = async (server) => {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cors());
  server.use(authenticate);
  server.use(express.static(__dirname + "/public"));
  server.use("./uploads", express.static("uploads"));
};
const startServer = async (server) => {
  try {
    const httpServer = new http.createServer(server);
    const io = new socketServer(httpServer, {
        cors: {
          origin: 'http://localhost:3000',
        },
      });
    io.on("connection", (socket) => {
      const handshake = socket.id;
     // let { funcion } = socket.handshake.query;
      const funcion = decrypt(socket.handshake.query.funcion)
      console.log("client connected", handshake, " joint to chat: ", funcion);
      socket.join(funcion);
      socket.on("disconnect", () => {
        console.log(
          "client disconnected",
          handshake,
          " left the chat: ",
          funcion
        );
      });
      socket.on("onSelected", (data) => {
        console.log(data);
        socket.to(funcion).emit("onSelected", data);
      });
    });
    httpServer.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port localhost ${process.env.PORT}`);
      console.log(`Socket waiting for localhost`);
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { setupServer };
