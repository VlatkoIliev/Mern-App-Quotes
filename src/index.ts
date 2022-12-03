import express, { Express } from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import Quote from './model/quoteModel';
import quoteRoutes from './routes/quoteRoutes';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI as string);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

// fetch the quotes list and save it in database on server start
async function getQuotes() {
  const response = await axios.get('https://animechan.vercel.app/api/quotes', {
    headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' },
    params: { trophies: true },
  });
  const data = response.data;
  for (let i = 0; i < data.length; i++) {
    const quote = new Quote({
      anime: data[i]['anime'],
      character: data[i]['character'],
      quote: data[i]['quote'],
    });
    quote.save();
  }
}

getQuotes();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(quoteRoutes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
