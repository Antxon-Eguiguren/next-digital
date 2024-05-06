import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ALBUM } from '../models/album';
import { PHOTO } from '../models/photo';

function Album({ album, photos }) {
  const navigate = useNavigate();

  const getAlbumThumbnail = () => {
    const albumPhoto = photos.find((photo) => photo.albumId === album.id);
    return albumPhoto?.thumbnailUrl;
  };

  const handleClick = () => {
    navigate(`/album/${album.id}`, { state: { album, photos } });
  };

  return (
    <img
      src={getAlbumThumbnail()}
      alt="album"
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    />
  );
}

Album.propTypes = {
  album: PropTypes.shape(ALBUM),
  photos: PropTypes.arrayOf(PropTypes.shape(PHOTO)),
};

export default Album;
