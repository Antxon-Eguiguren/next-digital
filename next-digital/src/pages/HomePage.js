import List from '../components/List';
import useFetch from '../hooks/useFetch';
import { USERS_URL } from '../utils/constants';

function HomePage() {
  const { data } = useFetch({ url: USERS_URL });

  return <List data={data} />;
}

export default HomePage;
