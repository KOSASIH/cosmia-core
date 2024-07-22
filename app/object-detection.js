import * as cv from 'opencv.js';

async function detectObjects(videoStream) {
  const detector = new cv.Detector();
  detector.setThreshold(0.5);
  detector.setMinNeighbors(5);
  detector.setScaleFactor(1.1);
  detector.setMinSize(new cv.Size(30, 30));

  const video = new cv.VideoCapture(videoStream);
  while (true) {
    const frame = await video.read();
    const gray = await frame.cvtColor(cv.COLOR_BGR2GRAY);
    const objects = await detector.detect(gray);
    console.log(`Detected objects: ${objects.length}`);
  }
}

export default detectObjects;
