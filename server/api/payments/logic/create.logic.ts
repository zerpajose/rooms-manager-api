import { v4 as uuidv4 } from 'uuid';
import Payment from '../../../models/Payment.model';

export async function createPayment(payment: any) {
  const { amount, currency, description } = payment;

  const paymentIntent = await Payment.create({
    paymentId: uuidv4(),
    amount,
    currency,
    description,
    status: 'pending',
    paymentMethod: 'cash',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return paymentIntent.toObject();
}
