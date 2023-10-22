import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartCard from './CartCard'

const ShoppingCart = () => {
    const [cart, setCart] = useContext(CartContext)

    const quantity = cart.reduce((acc, prod) => {
        return acc + prod.quantity
    }, 0)

    const totalPrice = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)

    return (
        <div className="bg-white p-6  min-h-screen">
            <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
            <div className="divide-y divide-gray-200">
                {
                    cart.map((product) => (
                        <div key={product.id}>
                            <CartCard product={product} />
                        </div>
                    ))
                }
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-semibold">Total: ${totalPrice}</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Pagar</button>
                    </div>
                </div>
            </div>
        </div>
   )
}

export default ShoppingCart