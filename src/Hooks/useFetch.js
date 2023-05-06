import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setErro(null);
      setLoading(true);
      response = await fetch(url, options);
      json = response.json();
    } catch (err) {
    } finally {
    }
  });

  return { data, loading, erro };
};

export default useFetch;
