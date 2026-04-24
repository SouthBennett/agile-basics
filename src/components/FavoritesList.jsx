import './FavoritesList.css';



export default function FavoritesList({ favorites, selectedArtistId, setSelectedArtistId }) {
  const sortedFavorites = [...favorites].sort((a, b) => 
    a.name.localeCompare(b.name)
  )
  
  return (
    <section className="favorites-section">
      <h3>My Playlist</h3>

      <div className="favorites-list">
        {sortedFavorites.map((artist, index) => (
          <div 
            key={`${artist.id}-${index}`} 
            className={`favorite-item ${
              selectedArtistId === artist.id ? "active" : ""
            }`}
            onClick={() => setSelectedArtistId(artist.id)}
          >
            {artist.name}
          </div>
        ))}
      </div>
    </section>
  );
}