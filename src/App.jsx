import { NavBar } from './components/NavBar/Navbar'
import "./App.css"
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  return (
    <>
      <div>
      <NavBar />
      <ItemListContainer greeting="Hola Mundo"/>
    </div>
    </>
  )
}

export default App
