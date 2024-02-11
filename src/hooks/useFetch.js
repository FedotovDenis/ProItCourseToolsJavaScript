import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network error');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchDate();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
