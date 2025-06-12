import { io, Socket } from "socket.io-client";

const socket: Socket = io("https://signyards.com", {
  transports: ["websocket"],
  secure: true,
  path: "/node-server/socket.io",
});

export default socket;
