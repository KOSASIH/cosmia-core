import * as tf from '@tensorflow/tfjs';

class GAN {
  constructor() {
    this.generator = this.createGenerator();
    this.discriminator = this.createDiscriminator();
  }

  createGenerator() {
    const generator = tf.sequential();
    generator.add(tf.layers.dense({ units: 128, inputShape: [100] }));
    generator.add(tf.layers.batchNormalization());
    generator.add(tf.layers.leakyReLU());
    generator.add(tf.layers.dense({ units: 784 }));
    generator.add(tf.layers.batchNormalization());
    generator.add(tf.layers.leakyReLU());
    return generator;
  }

  createDiscriminator() {
    const discriminator = tf.sequential();
    discriminator.add(tf.layers.dense({ units: 128, inputShape: [784] }));
    discriminator.add(tf.layers.batchNormalization());
    discriminator.add(tf.layers.leakyReLU());
    discriminator.add(tf.layers.dense({ units: 1 }));
    discriminator.add(tf.layers.sigmoid());
    return discriminator;
  }

  async generateImage(latentVector) {
    const generatedImage = this.generator.predict(latentVector);
    return generatedImage;
  }
}

export default GAN;
