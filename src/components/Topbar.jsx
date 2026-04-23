import './Topbar.css'

function Topbar({data,
      searchTerm,
      setSearchTerm,
      selectedGenre,
      setSelectedGenre,
      sortOption,
      setSortOption
      }) {
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
        placeholder="Search genres, artists, albums..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
      <option value="All">All Genres</option>
      <option value="Indie Pop">Indie Pop</option>
      <option value="Folk Rock">Folk Rock</option>
      <option value="Synthwave">Synthwave</option>
      <option value="Dream Pop">Dream Pop</option>
      <option value="Post-Rock">Post-Rock</option>
      </select>

    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
      <option value="name-asc">A-Z</option>
      <option value="name-desc">Z-A</option>
    </select>

      <button className="profile-btn">Profile</button>
    </header>
  )
}

export default Topbar