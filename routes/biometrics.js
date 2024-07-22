import express from 'express';
import * as FaceAPI from 'face-api.js';

const router = express.Router();
const faceapi = new FaceAPI.FaceAPI();

router.post('/detect-faces', async (req, res) => {
  const { image } = req.body;
  const detections = await faceapi.detect(image);
  res.json({ detections });
});

router.post('/verify-faces', async (req, res) => {
  const { image1, image2 } = req.body;
  const similarity = await faceapi.verify(image1, image2);
  res.json({ similarity });
});

export default router;
