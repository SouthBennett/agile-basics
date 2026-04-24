import './ArtistCard.css'
import AlbumItem from './AlbumItem'

export default function ArtistCard({ artist, addToFavorites }) {

  return (
    <div className="artist-card">
      <div className="artist-cover">
        <img src={artist.image} alt='Cover-image'/>
      </div>

      <div className="artist-info">
        <h4>{artist.name}</h4>
        <p>{artist.genre}</p>
        <p>{artist.bio}</p>
        

        <div>
          {artist.albums.map((album, index) => (
            <AlbumItem key={index} album={album} />
          ))}
        </div>
      </div>

      <button onClick={() => addToFavorites(artist)}>
        Add to Playlist
      </button>

      {/* <span className="song-duration">duration</span> */}
    </div>
  )
}