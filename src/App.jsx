
import './App.css'
import Navbar from './components/NavBar'
import Itemlistcontainer from './components/NavBar/ItemListContainer'

function App() {


  return (
    <div> 
      <Navbar />
      <Itemlistcontainer greeting="Productos"/>
    </div>
  )
}

export default App
