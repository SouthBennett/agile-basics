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

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Topbar data={data} />
        <Hero />
        {/* <ArtistCard /> */}
        <ArtistList artists={data.artists} />
      </main>

      <Player />
    </div>
  );
}

export default App;
