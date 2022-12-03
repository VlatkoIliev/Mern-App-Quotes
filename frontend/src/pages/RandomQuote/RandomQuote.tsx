import { useState, useEffect } from 'react';
import { Quote } from '../../interfaces/Quote';
import { useFetch } from '../../hooks/useFetch';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { RandomQuotePage, Card } from './styles';

const RandomQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const { loading, error, data, fetchData } = useFetch('/quotes/random-quote');
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setQuote(data);
    } else {
      setQuote(null);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <RandomQuotePage>
      <Card>
        <RiDoubleQuotesL size={30} />
        <h2 className='quote'>{quote?.quote}</h2>
        <RiDoubleQuotesR
          style={{ position: 'absolute', right: 20 }}
          size={30}
        />
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
          }}
        >
          <hr />
          <h4>-{quote?.character}-</h4>
        </div>
      </Card>
      <div className='btn-container'>
        <button onClick={fetchData} className='btn btn--get-quote'>
          Get quote!
        </button>

        <button onClick={() => navigate('/')} className='btn btn--back'>
          Go back
        </button>
      </div>
    </RandomQuotePage>
  );
};

export default RandomQuote;
