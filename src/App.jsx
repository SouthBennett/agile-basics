import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import ArtistCard from "./components/ArtistCard";
import ArtistList from "./components/ArtistList";
import Player from "./components/Player";
import data from "./data.json";


function App() {
  console.log(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortOption, setSortOption] = useState("name-asc");

  const filteredArtists = data.artists
      .filter((artist) => {
      const matchedSearch = 
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.genre.toLowerCase().includes(selectedGenre.toLowerCase());
    
    const matchedGenre = 
      selectedGenre === "All" || artist.genre === selectedGenre;
    
      return matchedSearch && matchedGenre;
    })
    .sort ((a,b) => {
      if(sortOption === "name-asc"){
        return a.name.localeCompare(b.name);
      }

      if(sortOption === "name-desc"){
        return b.name.localeCompare(a.name);
      }
      return 0;
    });



  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Topbar data={data} 
          serachTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <Hero />
        {/* <ArtistCard /> */}
        <ArtistList artists={filteredArtists} />
      </main>

      <Player />
    </div>
  );
}

export default App;
