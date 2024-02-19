import { useContext } from 'react';
import useFetch from '../hooks/useFetch'; // Змінено імпорт з фігурними дужками
import UserContext from '../context/user';
import ClipLoader  from 'react-spinners/ClipLoader';

function Joke() {
  const user = useContext(UserContext);
  const { data, loading, error } = useFetch(
    'https://api.chucknorris.io/jokes/random'
  );

  if (loading) return <ClipLoader color="#36d7b7" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>Hi, {user?.name}</p>
      <p>Joke: {data.value}</p>
    </div>
  );
}

export default Joke;
