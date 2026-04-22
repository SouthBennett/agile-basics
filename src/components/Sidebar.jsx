import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">WaveLength Records</h1>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <a href="#">Library</a>
        <a href="#">Playlists</a>
        <a href="#">Liked Songs</a>
      </nav>
    </aside>
  )
}

export default Sidebar