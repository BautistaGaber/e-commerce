import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import NavBar from './components/NavBar'
import Home from './components/Home'
import NotFound from './components/NotFound/NotFound'
import ProductsById from './components/Products/ProductsById'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  return (
    <>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route exact path='products/:id' element={<ProductsById />} />
            <Route exact path='products/cart' element={<ShoppingCart />} />
            <Route exact path='products/cart/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
      </SkeletonTheme>
    </>
  )
}

export default App
