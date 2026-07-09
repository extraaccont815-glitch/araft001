import {Schema, model, Document} from 'mongoose';

export interface IMsg extends Document {
email?: string;
sellerName?: string;
message?: string;
}
const msgSchema = new Schema<IMsg>(
    {
        email: { type: String, trim: true },
        sellerName: { type: String, trim: true },
        message: { type: String, trim: true }
    },
    { timestamps: true }
);

const SellerMsg = models?.SellerMsg || model<IMsg>('SellerMsg', msgSchema);
export default SellerMsg;