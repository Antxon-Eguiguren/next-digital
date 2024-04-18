import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import AlbumDetailPage from './pages/AlbumDetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserDetailPage />} />
          <Route path="/album/:albumId" element={<AlbumDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
