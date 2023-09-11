import { Brand } from './components/Brand'
import { CategoryItem } from './components/CategoryItem'
import { CartContainer } from  './components/CartContainer'

import "./App.css"

function App() {
  return (
    <>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Brand />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="?">
                  <CategoryItem isActive={true} name="OFERTA" className="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="?">
                  <CategoryItem isActive={true} name="OFERTAS" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="?">
                  <CategoryItem isActive={true} name="OFERTAS" />
                </a>
              </li>
            </ul>
          </div>
          <CartContainer/>
        </div>
      </nav>
    </div>
    </>
  )
}

export default App
