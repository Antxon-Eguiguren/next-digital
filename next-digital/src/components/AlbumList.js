import PropTypes from 'prop-types';
import { ALBUM } from '../models/album';
import { PHOTO } from '../models/photo';
import Album from './Album';

function AlbumList({ albums, photos }) {
  return albums.map((album) => <Album key={album.id} album={album} photos={photos} />);
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape(ALBUM)),
  photos: PropTypes.arrayOf(PropTypes.shape(PHOTO)),
};

export default AlbumList;
