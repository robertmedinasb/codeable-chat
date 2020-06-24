const PORT = process.env.PORT || 3000;
const WebSocketServer = require("ws").Server; // here we are using WS library
const wss = new WebSocketServer({ port: `${PORT}` });
wss.on("connection", (ws) => {
    console.log("Connection opened 🚀");
    ws.send("Codeable's chat connected 🚀");
    ws.on("message", (message) => {
      console.log(message)
        wss.clients.forEach((client) => {
          if (client != ws) client.send(message);
        });
    });
    ws.on("close", () => {
        console.log("Connection closed 💀");
    });
  });