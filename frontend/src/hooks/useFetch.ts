import { useState, useEffect } from 'react';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-type': 'application/json',
  },
});

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, data, fetchData };
};
