import QuotesList from './pages/QuoteList/QuotesList';
import RandomQuote from './pages/RandomQuote/RandomQuote';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<QuotesList />} />
        <Route path='/random-quote' element={<RandomQuote />} />
      </Routes>
    </>
  );
}

export default App;
