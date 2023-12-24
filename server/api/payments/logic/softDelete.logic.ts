import Payment from '../../../models/Payment.model';

export async function softDeletePayment(paymentId: string){
  return Payment.findOneAndUpdate(
    { paymentId, deletedAt: { $exists: false } },
    { deletedAt: new Date() },
    { new: true }
  );
}
