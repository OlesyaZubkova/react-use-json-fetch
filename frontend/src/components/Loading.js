import useJsonFetch from "../hooks/useJsonFetch";

function Loading(props) {
  const [{ data, loading, error }] = useJsonFetch(
    "http://localhost:7070/loading"
  );

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <div>{data.status}</div>}
    </div>
  );
}

export default Loading;
