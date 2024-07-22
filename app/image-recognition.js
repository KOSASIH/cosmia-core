import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.conv2d({ inputShape: [28, 28, 1], filters: 32, kernelSize: 3, activation: 'relu' }));
model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
model.add(tf.layers.flatten());
model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

async function recognizeImage(imageData) {
  const tensor = tf.tensor3d(imageData, [1, 28, 28, 1]);
  const output = model.predict(tensor);
  const classification = output.argMax(1);
  return classification;
}

export default recognizeImage;
