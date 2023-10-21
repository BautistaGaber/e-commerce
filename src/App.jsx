import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import NavBar from './components/NavBar'
import Home from './components/Home'
import NotFound from './components/NotFound/NotFound'
import ProductsById from './components/Products/ProductsById'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route exact path='products/:id' element={<ProductsById />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
