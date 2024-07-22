import express from 'express';
import * as Astropy from 'astropy';

const router = express.Router();
const astropy = new Astropy.Astropy();

router.post('/astronomical-object-detection', async (req, res) => {
  const { image } = req.body;
  const detections = await astropy.detect(image);
  res.json({ detections });
});

router.post('/astronomical-object-characterization', async (req, res) => {
  const { object } = req.body;
  const characterization = await astropy.characterize(object);
  res.json({ characterization });
});

router.post('/astronomical-event-prediction', async (req, res) => {
  const { data } = req.body;
  const prediction = await astropy.predict(data);
  res.json({ prediction });
});

export default router;
