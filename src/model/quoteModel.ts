import { model, Schema } from 'mongoose';
import { IQuote } from '../types/IQuote';

const quoteSchema: Schema = new Schema({
  anime: {
    type: String,
    required: true,
  },
  character: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
});

export default model<IQuote>('Quote', quoteSchema);
