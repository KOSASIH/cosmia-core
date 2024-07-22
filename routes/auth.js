import express from 'express';
import { authenticate } from '../middleware/auth';
import { User } from '../models/user';

const router = express.Router();

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).exec();
    if (!user) {
      res.status(401).json({ message: 'Invalid username or password' });
    } else {
      const isValid = await user.authenticate(req.body.password);
      if (!isValid) {
        res.status(401).json({ message: 'Invalid username or password' });
      } else {
        const token = await user.generateToken();
        res.json({ token });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message:'Internal Server Error' });
  }
});

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid request' });
  }
});

export default router;
