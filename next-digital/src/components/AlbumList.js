import Album from './Album';

function AlbumList({ albums, photos }) {
  return albums.map((album) => <Album key={album.id} album={album} photos={photos} />);
}

export default AlbumList;
