export default function AlbumItem({ album }) {
  return (
    <p>
      {album.title} ({album.year})
    </p>
  );
}
