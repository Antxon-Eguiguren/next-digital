import { useNavigate, useLocation } from 'react-router-dom';
import PhotoCarousel from '../components/PhotoCarousel';

function AlbumDetailPage() {
  const navigate = useNavigate();
  const {
    state: { album, photos },
  } = useLocation();

  const getAlbumPhotos = () => photos.filter((photo) => photo.albumId === album.id);

  return (
    <>
      <p>Album id: {album?.id}</p>
      <PhotoCarousel photos={getAlbumPhotos()} />
      <button style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
        Volver
      </button>
    </>
  );
}

export default AlbumDetailPage;
