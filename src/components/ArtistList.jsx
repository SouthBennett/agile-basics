import ArtistCard from "./ArtistCard";
import "./ArtistList.css";

function ArtistList({ artists, addToFavorites }) {
  return (
    <section className="section">
      <h3>Artists</h3>

      <div className="artist-list">
        {artists.map((artist) => (
          <ArtistCard 
            key={artist.id} 
            artist={artist} 
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
    </section>
  );
}

export default ArtistList;
