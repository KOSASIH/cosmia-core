import express from 'express';
import { WebSocket } from 'ws';
import { authenticate } from '../middleware/auth';

const router = express.Router();
const wss = new WebSocket.Server({ port: 8080 });

router.get('/websocket', authenticate, (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  res.write('data: Connected to WebSocket\n\n');
  res.flush();

  const ws = wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
    wss.emit('connection', ws, req);
  });
});

wss.on('connection', (ws, req) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    ws.send(`Server received your message => ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

export default router;
