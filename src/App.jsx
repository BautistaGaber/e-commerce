import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/Products'
import NavBar from './components/NavBar'
import Home from './components/Home'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='products' element={<Products/>}/>
        <Route path='products/*' element={<NotFound/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
