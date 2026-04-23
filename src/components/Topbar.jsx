import './Topbar.css'

function Topbar({data}) {
  return (
    <header className="topbar">
      <div>
        {/* <h1>{data.label}</h1> */}
        <p>{data.tagline}</p>
        <p>{data.city } {"\u2022"} Founded {data.founded}</p>
      </div>

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