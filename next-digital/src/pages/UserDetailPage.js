import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { PHOTOS_URL, TODOS_URL } from '../utils/constants';

function UserDetailPage() {
  const navigate = useNavigate();
  const {
    state: { user },
  } = useLocation();

  const { data: photos, errorPhotos } = useFetch({ url: PHOTOS_URL });
  const { data: todos, errorTodos } = useFetch({ url: TODOS_URL });

  const getUserTodos = () => todos.filter((todo) => todo.userId === user.id);

  return (
    <>
      {(errorPhotos || errorTodos) && <p>Ha habido un error, inténtalo de nuevo más tarde!</p>}
      <Card user={user} photos={photos} todos={getUserTodos()} />
      <button style={{ cursor: 'pointer', marginTop: '20px' }} onClick={() => navigate('/')}>
        Volver
      </button>
    </>
  );
}

export default UserDetailPage;
