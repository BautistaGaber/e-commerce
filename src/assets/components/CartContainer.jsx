import { CartWidget } from './CartWidget'
import { CartItem } from './CartItem'

export const CartContainer = () => {
    return (
        <div className="bg-warning rounded-circle p-3 position-relative">
            <CartWidget/>
            <CartItem count={2}/>
        </div>
    )
}