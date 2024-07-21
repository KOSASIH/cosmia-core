import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { Database } from './infrastructure/database/db';
import { User } from './infrastructure/database/models/user';
import { Message } from './infrastructure/database/models/message';
import { Crypto } from './utils/crypto';
import { Math } from './utils/math';

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

const database = new Database('mongodb://localhost:27017/cosmia', 'redis://localhost:6379');
await database.connect();

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.createUser(username, email, password);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.getUserByUsername(username);
    if (!user) {
      res.status(401).json({ message: 'Invalid username or password' });
    } else if (!(await user.authenticate(password))) {
      res.status(401).json({ message: 'Invalid username or password' });
    } else {
      res.status(200).json({ message: 'Login successful' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

app.post('/send-message', async (req, res) => {
  const { from, to, content, type, priority } = req.body;
  try {
    const message = await Message.createMessage(from, to, content, type, priority);
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
});

app.get('/messages', async (req, res) => {
  const userId = req.query.userId;
  try {
    const messages = await Message.getMessagesForUser(userId);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving messages' });
  }
});

app.listen(3000, () => {
  console.log('Cosmia Core API listening on port 3000');
});
