import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAuth } from '@/hooks/useAuth';

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {

    if (isAuthenticated) {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        console.log("User ID not found, not connecting to socket.");
        return;
      }

      console.log("Connecting to socket with userId:", userId);

      const newSocket = io('http://localhost:3001', {
        query: { userId },
        transports: ['websocket'],
      });

      newSocket.on('connect', () => {
        console.log('Connected to socket server:', newSocket.id);
      });

      newSocket.on('disconnect', () => {
        console.log('Disconnected from socket server');
      });

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }
  }, [isAuthenticated]);

  return socket;
};

export default useSocket;
