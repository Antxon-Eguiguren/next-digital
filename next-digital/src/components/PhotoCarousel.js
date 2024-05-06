import PropTypes from 'prop-types';
import { PHOTO } from '../models/photo';

function PhotoCarousel({ photos }) {
  return (
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
      ))}
    </div>
  );
}

PhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(PHOTO)),
};

export default PhotoCarousel;
