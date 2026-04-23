
import './App.css'
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Hero from "./components/Hero"
import SongList from "./components/SongList"
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
          <SongList />
        </main>

        <Player />
      </div>
   
  )
}

export default App