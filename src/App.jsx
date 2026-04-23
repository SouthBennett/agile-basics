
import './App.css'
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Hero from "./components/Hero"
import SongCard from './components/SongCard'
import ArtistList from "./components/ArtistList"
import Player from "./components/Player"
import data from './data.json'

function App() {

  console.log(data);

  return (
    
    <div className='app'>
        <Sidebar />
        <main className="main-content">
          <Topbar data={data}/>
          <Hero />
          <SongCard />
          <ArtistList artists={data.artists}/>
        </main>

        <Player />
      </div>
   
  )
}

export default App