import express from 'express';
import { validateRequest } from '../middleware/validation';
import { authenticate } from '../middleware/auth';
import { User } from '../models/user';
import { Message } from '../models/message';

const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get a user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new user
router.post('/users', validateRequest, async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid request' });
  }
});

// Update a user
router.patch('/users/:id', authenticate, validateRequest, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      user.update(req.body);
      await user.save();
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a user
router.delete('/users/:id', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      await user.remove();
      res.json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().exec();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new message
router.post('/messages', authenticate, validateRequest, async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.json(message);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid request' });
  }
});

export default router;
