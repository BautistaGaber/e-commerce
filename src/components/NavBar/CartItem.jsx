export const CartItem = ({ count = 0 }) => {
    return (
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {count}
        </span>
    )
}