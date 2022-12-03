import { Document } from 'mongoose';

export interface IQuote extends Document {
  anime: string;
  character: string;
  quote: string;
}
