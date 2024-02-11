import useFetch from './UseFetch';

function UseFetchComponent() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.map((value) => (
        <li key={value.id}>{value.title}</li>
      ))}
    </ul>
  );
}

export default UseFetchComponent;
