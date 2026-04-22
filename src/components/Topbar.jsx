import './Topbar.css'

function Topbar() {
  return (
    <header className="topbar">
      <input
        type="text"
        className="search-bar"
        placeholder="Search songs, artists, albums..."
      />
      <button className="profile-btn">Profile</button>
    </header>
  )
}

export default Topbar