import PropTypes from 'prop-types';
import { USER } from '../models/user';
import useFetch from '../hooks/useFetch';
import AlbumList from './AlbumList';

function Card({ user, photos }) {
  const { data: albums } = useFetch({
    url: `https://jsonplaceholder.typicode.com/users/${user.id}/albums`,
  });

  return (
    <div>
      <p>Nombre: {user.name}</p>
      <p>Usuario: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Ciudad: {user.city}</p>
      <p>Website: {user.website}</p>
      <p>Empresa: {user.company.name}</p>
      <p>Album list:</p>
      <AlbumList albums={albums} photos={photos} />
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.shape(USER),
};

export default Card;
