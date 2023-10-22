import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartCard = ({product}) => {

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
    
      const removeProduct = (id) => {
        setCart((currentProd) => {
          if (currentProd.find((prod) => prod.id === product.id)?.quantity === 1){
            return currentProd.filter((prod) => prod.id !== id)
          }else{
            return currentProd.map((prod) => {
              if(prod.id === id){
                return {...prod, quantity: prod.quantity - 1}
              }else{
                return prod
              }
            })
          }
        })
      }

      const getQuantityById = (id) => {
        return cart.find((prod) => prod.id === id)?.quantity || 0
      }
    
      const quantityPerItem = getQuantityById(product.id)

    return (
        <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
                <img src={product.image} alt="Producto 1" className="w-16 h-16 rounded-md object-cover" />
                <div className="ml-4">
                    <h3 className="text-lg font-medium">{product.title}</h3>
                    <p className="text-gray-500">{product.price}</p>
                </div>
            </div>
            <div className="flex items-center">
                {quantityPerItem > 0 && (<button onClick={() => removeProduct(product.id)} className="text-red-600 hover:text-red-800 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>)}
                <span className="mx-2">1</span>
                <button onClick={() => {addToCart(product, 1)}} className="text-blue-600 hover:text-blue-800 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CartCard