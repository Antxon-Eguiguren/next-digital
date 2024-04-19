import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { PHOTOS_URL } from '../utils/constants';

function UserDetailPage() {
  const navigate = useNavigate();
  const {
    state: { user },
  } = useLocation();

  const { data: photos, error } = useFetch({ url: PHOTOS_URL });

  return (
    <>
      {error && <p>Ha habido un error, inténtalo de nuevo más tarde!</p>}
      <Card user={user} photos={photos} />
      <button style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        Volver
      </button>
    </>
  );
}

export default UserDetailPage;
