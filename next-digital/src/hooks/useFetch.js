import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useFetch({ url }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return { data };
}

useFetch.propTypes = {
  url: PropTypes.string,
};

export default useFetch;
