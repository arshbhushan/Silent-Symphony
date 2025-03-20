import React, { createContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

// Create a WebSocket context
export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

// In your WebSocketProvider component
useEffect(() => {
    const newSocket = io("http://localhost:5000");
    console.log("WebSocket initialized:", newSocket); // Log WebSocket initialization

    newSocket.on("connect", () => {
        console.log("WebSocket connected successfully!"); // Log connection success
    });

    newSocket.on("connect_error", (error) => {
        console.error("WebSocket connection error:", error); // Log connection errors
    });

    setSocket(newSocket);

    return () => newSocket.disconnect();
}, []);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Custom hook to use WebSocket
export const useWebSocket = () => React.useContext(WebSocketContext);