import { Brand } from './Brand'
import { CategoryItem } from './CategoryItem'
import { CartContainer } from './CartContainer'
import { InputContainer } from './InputContainer'
import { MenuButton } from './MenuButton'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid w-12">
                <Brand />
                <MenuButton />
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="?">
                                <CategoryItem isActive={true} name="Hombre" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="?">
                                <CategoryItem isActive={true} name="Mujer" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="?">
                                <CategoryItem isActive={true} name="Ofertas" />
                            </a>
                        </li>
                    </ul>
                    <InputContainer />
                </div>           
                <CartContainer />
            </div>
        </nav>
    )
}