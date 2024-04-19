import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useFetch({ url }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = localStorage.getItem(url);

    if (cached) {
      setData(JSON.parse(cached));
    } else {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          localStorage.setItem(url, JSON.stringify(data));
          setData(data);
        })
        .catch((error) => setError(error));
    }
  }, [url]);

  return { data, error };
}

useFetch.propTypes = {
  url: PropTypes.string,
};

export default useFetch;
