import express from 'express';
import * as Autoware from 'autoware-api';

const router = express.Router();
const autoware = new Autoware.AutowareAPI({
  url: 'http://localhost:8080',
});

router.post('/start-autonomous-mode', (req, res) => {
  autoware.startAutonomousMode();
  res.json({ message: 'Autonomous mode started' });
});

router.post('/set-destination', (req, res) => {
  const { latitude, longitude } = req.body;
  autoware.setDestination(latitude, longitude);
  res.json({ message: 'Destination set' });
});

export default router;
