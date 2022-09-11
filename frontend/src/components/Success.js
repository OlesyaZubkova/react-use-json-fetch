import useJsonFetch from "../hooks/useJsonFetch";

function Success(props) {
  const [{ data, loading, error }] = useJsonFetch("http://localhost:7070/data");

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <div>{data.status}</div>}
    </div>
  );
}

export default Success;
