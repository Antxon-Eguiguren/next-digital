import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

function UserDetailPage() {
  const navigate = useNavigate();
  const {
    state: { user },
  } = useLocation();

  return (
    <>
      <Card user={user} />
      <button onClick={() => navigate('/')}>Volver</button>
    </>
  );
}

export default UserDetailPage;
