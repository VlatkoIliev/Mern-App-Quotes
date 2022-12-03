import { Response, Request } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Quote from '../model/quoteModel';
import { IQuote } from '../types/IQuote';

const getQuotes = expressAsyncHandler(async (req: Request, res: Response) => {
  const quotes: IQuote[] = await Quote.find();
  res.status(200).json(quotes);
  if (quotes) {
  } else {
    res.status(400);
    throw new Error('Bad request');
  }
});

const getRandomQuote = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const quotes = await Quote.find();
    const quote = randomArrayValue(quotes);
    if (quote) {
      res.status(200).json(quote);
    } else {
      res.status(404);
      throw new Error('Could not find quote');
    }
  }
);

function randomArrayValue(array: any) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export { getQuotes, getRandomQuote };
