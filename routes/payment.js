import express from 'express';
import { stripe } from '../config/stripe';

const router = express.Router();

router.post('/payment', async (req, res) => {
  try {
    const { amount, currency, paymentMethod } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: [paymentMethod],
    });
    res.json(paymentIntent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
