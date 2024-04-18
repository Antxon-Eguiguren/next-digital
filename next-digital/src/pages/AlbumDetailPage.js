import { useNavigate, useLocation } from 'react-router-dom';

function AlbumDetailPage() {
  const navigate = useNavigate();
  const {
    state: { album },
  } = useLocation();

  return (
    <>
      <p>Album id: {album?.id}</p>
      <button style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
        Volver
      </button>
    </>
  );
}

export default AlbumDetailPage;
