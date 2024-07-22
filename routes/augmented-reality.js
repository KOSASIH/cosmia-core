import express from 'express';
import * as AR from 'aframe';

const router = express.Router();
const scene = new AR.Scene();

router.post('/generate-ar-model', (req, res) => {
  const { modelData } = req.body;
  const model = scene.addModel(modelData);
  res.json({ modelId: model.id });
});

router.post('/track-ar-model', (req, res) => {
  const { modelId, cameraData } = req.body;
  const model = scene.getModel(modelId);
  const tracker = new AR.Tracker(cameraData);
  model.addTracker(tracker);
  res.json({ trackerId: tracker.id });
});

export default router;
