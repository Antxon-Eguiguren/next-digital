import PropTypes from 'prop-types';
import { USER } from '../models/user';
import { PHOTO } from '../models/photo';
import { USERS_URL } from '../utils/constants';
import useFetch from '../hooks/useFetch';
import AlbumList from './AlbumList';

function Card({ user, photos }) {
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
      </div>
    </>
  );
}

Card.propTypes = {
  user: PropTypes.shape(USER),
  photos: PropTypes.arrayOf(PropTypes.shape(PHOTO)),
};

export default Card;
