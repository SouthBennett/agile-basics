import SongCard from "./SongCard"
import './ArtistList.css'


function ArtistList({ artists }) {
  return (
    <section className="section">
      <h3>Artists</h3>

      <div className="artist-list">
        {artists.map((artist) => (
          <p key={artist.id}>{artist.name}</p>
        ))}
      </div>
    </section>
  )
}

export default ArtistList