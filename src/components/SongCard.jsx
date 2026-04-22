import './SongCard.css'

function SongCard() {
  return (
    <div className="song-card">
      <div className="song-cover"></div>

      <div className="song-info">
        <h4>title</h4>
        <p>artist</p>
      </div>

      <span className="song-duration">duration</span>
    </div>
  )
}

export default SongCard