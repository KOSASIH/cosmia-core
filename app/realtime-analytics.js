import { Kafka } from 'kafka-node';

const kafka = new Kafka({
  clientId: 'cosmia-core',
  brokers: ['kafka-broker:9092'],
});

async function produceData(data) {
  const producer = kafka.producer();
  await producer.send([{ topic: 'cosmia-data', messages: [data] }]);
}

async function consumeData() {
  const consumer = kafka.consumer({ groupId: 'cosmia-core' });
  await consumer.subscribe([{ topic: 'cosmia-data', partition: 0 }]);
  await consumer.on('message', (message) => {
    console.log(`Received message: ${message.value}`);
  });
}

export { produceData, consumeData };
