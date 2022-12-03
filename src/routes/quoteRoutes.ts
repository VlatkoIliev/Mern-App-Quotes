import { Router } from 'express';
import { getQuotes, getRandomQuote } from '../controllers/quotesController';

const router: Router = Router();

router.get('/quotes', getQuotes);
router.get('/quotes/random-quote', getRandomQuote);

export default router;
