import { useState, useEffect } from "react";

function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setData(data));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return [{ data, loading, error }];
}

export default useJsonFetch;
