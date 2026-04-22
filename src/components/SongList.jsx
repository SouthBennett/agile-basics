import SongCard from "./SongCard"
import './SongList.css'


function SongList() {
  return (
    <section className="section">
      <h3>Trending Songs</h3>

      <div className="song-list">
        Name, Genre, short bio, albums
      </div>
    </section>
  )
}

export default SongList