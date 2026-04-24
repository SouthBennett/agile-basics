import './FavoritesList.css';

export default function FavoritesList({ favorites }) {
  return (
    <section className="favorites-section">
      <h3>Saved Artists</h3>

      <div className="favorites-list">
        {favorites.map((artist) => (
          <div key={artist.id} className="favorite-item">
            {artist.name}
          </div>
        ))}
      </div>
    </section>
  );
}