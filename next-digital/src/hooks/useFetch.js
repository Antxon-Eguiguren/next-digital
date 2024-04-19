import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useFetch({ url }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [url]);

  return { data, error };
}

useFetch.propTypes = {
  url: PropTypes.string,
};

export default useFetch;
