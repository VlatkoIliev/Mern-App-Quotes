import { Response, Request } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Quote from '../model/quoteModel';
import { IQuote } from '../types/IQuote';

const getQuotes = expressAsyncHandler(async (req: Request, res: Response) => {
  const size = req.query.limit as unknown as number;
  const quotes: IQuote[] = await Quote.find().limit(size);
  res.status(200).json(quotes);
  if (quotes) {
  } else {
    res.status(500);
    throw new Error('Some error occured while retrieving data');
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
