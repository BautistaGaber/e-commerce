import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ButtonDetails from './ButtonDetails'

const ProductsContainer = ({ product }) => {

  const [cart, setCart] = useContext(CartContext)

  const addToCart = () => {
    setCart((currentProd) => {
      const prodFind = currentProd.find((prod) => prod.id === product.id)
      if (prodFind) {
        return currentProd.map((prod) => {
          if (prod.id === product.id) {
            return { ...prod, quantity: prod.quantity + 1 }
          } else {
            return prod
          }
        })
      } else {
        return [...currentProd, { ...product, quantity: 1 }]
      }
    })
  }  

  const getQuantityById = (id) => {
    return cart.find((prod) => prod.id === id)?.quantity || 0
  }

  const quantityPerItem = getQuantityById(product.id)

  return (
    <>
      <div className="relative flex flex-col">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={product.image} alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="absolute left-64 bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
          {quantityPerItem}
        </div>
        <div className="mt-4">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <p aria-hidden="true" className="inset-0">
                  {product.name}
                </p>
              </a>
            </h3>
            <div className="h-24 w-auto">
              <p className="mt-1 text-sm text-gray-500">{product.title}</p>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="text-blue-700 font-bold py-2 cursor-pointer" onClick={() => addToCart(product, 1)}>
              Agregar al carrito
            </button>
            <a className="flex" href={`/products/${product.id}`}>
              <ButtonDetails buttonName="detalle" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsContainer