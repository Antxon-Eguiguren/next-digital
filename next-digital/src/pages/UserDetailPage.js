import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { PHOTOS_URL } from '../utils/constants';

function UserDetailPage() {
  const navigate = useNavigate();
  const {
    state: { user },
  } = useLocation();

  const { data: photos } = useFetch({ url: PHOTOS_URL });

  return (
    <>
      <Card user={user} photos={photos} />
      <button style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        Volver
      </button>
    </>
  );
}

export default UserDetailPage;
