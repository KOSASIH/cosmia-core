import express from 'express';
import { MQTT } from 'qtt-connection';

const router = express.Router();
const mqtt = new MQTT('mqtt://localhost:1883');

router.post('/iot-device', (req, res) => {
  const { deviceId, sensorData } = req.body;
  mqtt.publish(`device/${deviceId}`, JSON.stringify(sensorData));
  res.json({ message: 'Sensor data published' });
});

router.get('/iot-device/:deviceId', (req, res) => {
  const deviceId = req.params.deviceId;
  mqtt.subscribe(`device/${deviceId}`);
  mqtt.on('message', (topic, message) => {
    if (topic === `device/${deviceId}`) {
      res.json(JSON.parse(message.toString()));
    }
  });
});

export default router;
