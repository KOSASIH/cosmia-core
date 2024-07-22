import * as cv from 'opencv.js';

class Realtime3DReconstruction {
  constructor() {
    this.orb = new cv.ORB();
    this.bruteForceMatcher = new cv.BruteForceMatcher();
  }

  async reconstruct3D(imageStream) {
    const frames = [];
    for (let i = 0; i < 10; i++) {
      const frame = await imageStream.read();
      frames.push(frame);
    }
    const points3D = this.orb.reconstruct3D(frames);
    return points3D;
  }
}

export default Realtime3DReconstruction;
