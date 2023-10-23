import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const useAddProd = ({ product }) => {
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
            if (currentProd.find((prod) => prod.id === product.id)?.quantity === 1) {
                return currentProd.filter((prod) => prod.id !== id)
            } else {
                return currentProd.map((prod) => {
                    if (prod.id === id) {
                        return { ...prod, quantity: prod.quantity - 1 }
                    } else {
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

    return {
        cart,
        addToCart,
        removeProduct,
        getQuantityById,
        quantityPerItem,
    }
}

export default useAddProd