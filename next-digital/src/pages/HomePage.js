import List from '../components/List';
import useFetch from '../hooks/useFetch';
import { USERS_URL } from '../utils/constants';

function HomePage() {
  const { data: users, error } = useFetch({ url: USERS_URL });

  return (
    <>
      {error && <p>Ha habido un error, inténtalo de nuevo más tarde!</p>}
      <List users={users} />
    </>
  );
}

export default HomePage;
