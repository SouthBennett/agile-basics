import './FavoritesList.css';



export default function FavoritesList({ favorites }) {
  const sortedFavorites = [...favorites].sort((a, b) => 
    a.name.localeCompare(b.name)
  )
  
  return (
    <section className="favorites-section">
      <h3>My Playlist</h3>

      <div className="favorites-list">
        {sortedFavorites.map((artist) => (
          <div key={artist.id} className="favorite-item">
            {artist.name}
          </div>
        ))}
      </div>
    </section>
  );
}