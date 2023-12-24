import mongoose, { Model, Document } from 'mongoose';
const { Schema } = mongoose;

export interface IPayment {
  paymentId: string;
  amount: number;
  currency: string;
  description: string;
  status: string;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
interface IPaymentDocument extends IPayment, Document {}
type IPaymentModel = Model<IPaymentDocument>;

/**
 * Payment Schema
 * @private
 * @param {String} paymentId - Payment's identifier
 * @param {Number} amount - Payment amount
 * @param {String} currency - Payment currency
 * @param {String} description - Payment description
 * @param {String} status - Payment status
 * @param {String} paymentMethod - Payment paymentMethod
 * @param {Date} createdAt - Date of payment creation
 * @param {Date} updatedAt - Date of last update
 * @returns {Payment}
 */
const PaymentSchema = new Schema<
  IPaymentDocument,
  IPaymentModel,
  IPayment
>(
  {
    paymentId: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    description: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    deletedAt: { type: Date },
  }
);

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;
