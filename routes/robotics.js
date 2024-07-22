import express from 'express';
import * as ROS from 'ros-nodejs';

const router = express.Router();
const ros = new ROS.Node({
  url: 'ws://localhost:9090',
  topics: ['cmd_vel', 'odom'],
});

router.post('/move-robot', (req, res) => {
  const { velocity } = req.body;
  const msg = new ROS.Message({
    linear: { x: velocity.x, y: velocity.y, z: velocity.z },
    angular: { x: velocity.rx, y: velocity.ry, z: velocity.rz },
  });
  ros.publish('cmd_vel', msg);
  res.json({ message: 'Robot moving' });
});

router.get('/get-robot-odometry', (req, res) => {
  const odom = ros.subscribe('odom');
  res.json({ odom });
});

export default router;
