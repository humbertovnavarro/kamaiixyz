import { io } from "socket.io-client";
const socket = io(`${location.hostname}:3001`);
export default socket;