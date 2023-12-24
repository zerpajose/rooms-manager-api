import Payment from '../../../models/Payment.model';

export async function getPayment(paymentId: string) {

  const paymentIntent = await Payment.findOne({ paymentId });

  return paymentIntent?.toObject();
}
