import { createContext, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
const SocketContext = createContext();
const socket = io("http://localhost:5000");
export const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState();
  const [me, setMe] = useState();
  const myVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((currentStream) => {
        setStream(currentStream);
        if (myVideo) {
          myVideo.current.srcObject = currentStream;
        }
      });

    socket.on("me", (id) => setMe(id));
    socket.on("userCall", () => {});
  }, [myVideo]);
  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};
