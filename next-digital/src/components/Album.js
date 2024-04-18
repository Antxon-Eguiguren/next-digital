import { useNavigate } from 'react-router-dom';

function Album({ album, photos }) {
  const navigate = useNavigate();

  const getAlbumThumbnail = () => {
    const albumPhoto = photos.find((photo) => photo.albumId === album.id);
    return albumPhoto?.thumbnailUrl;
  };

  const handleClick = () => {
    navigate(`/album/${album.id}`, { state: { album } });
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

export default Album;
