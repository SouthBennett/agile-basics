import './Player.css'

function Player() {
  return (
    <footer className="player">
      <div className="now-playing">
        <div className="mini-cover">
          <img src='LunaPark.png' alt='luna park cover art' />
        </div>
        <div>
          <h4>Luna Park</h4>
          <p>Soft Machinery</p>
        </div>
      </div>

      <div className="player-controls">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>

      <div className="volume-control">
        <span>🔊</span>
        <input type="range" min="0" max="100" />
      </div>
    </footer>
  )
}

export default Player