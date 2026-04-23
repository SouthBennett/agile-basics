import './ArtistCard.css'
import AlbumItem from './AlbumItem'

function ArtistCard({ artist }) {

  return (
    <div className="artist-card">
      <div className="artist-cover"></div>

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

      {/* <span className="song-duration">duration</span> */}
    </div>
  )
}

export default ArtistCard