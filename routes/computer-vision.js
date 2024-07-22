import express from 'express';
import * as OpenCV from 'opencv4nodejs';

const router = express.Router();
const cv = new OpenCV.CV();

router.post('/image-processing', async (req, res) => {
  const { image } = req.body;
  const processedImage = await cv.processImage(image, 'grayscale');
  res.json({ processedImage });
});

router.post('/object-detection', async (req, res) => {
  const { image } = req.body;
  const detections = await cv.detectObjects(image, 'yolo');
  res.json({ detections });
});

router.post('/image-segmentation', async (req, res) => {
  const { image } = req.body;
  const segmentation = await cv.segmentImage(image, 'kmeans');
  res.json({ segmentation });
});

export default router;
