import PropTypes from 'prop-types';
import { USER } from '../models/user';
import { PHOTO } from '../models/photo';
import { TODO } from '../models/todo';
import { USERS_URL } from '../utils/constants';
import useFetch from '../hooks/useFetch';
import AlbumList from './AlbumList';
import TodoList from './TodoList';

function Card({ user, photos, todos }) {
  const { data: albums, error } = useFetch({ url: `${USERS_URL}/${user.id}/albums` });

  return (
    <>
      {error && <p>Ha habido un error, inténtalo de nuevo más tarde!</p>}
      <div>
        <p>Nombre: {user.name}</p>
        <p>Usuario: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Ciudad: {user.address.city}</p>
        <p>Website: {user.website}</p>
        <p>Empresa: {user.company.name}</p>
        <p>Album list:</p>
        <AlbumList albums={albums} photos={photos} />
        <p>TODO list:</p>
        <TodoList todos={todos} />
      </div>
    </>
  );
}

Card.propTypes = {
  user: PropTypes.shape(USER),
  photos: PropTypes.arrayOf(PropTypes.shape(PHOTO)),
  todos: PropTypes.arrayOf(PropTypes.shape(TODO)),
};

export default Card;
