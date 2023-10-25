import useAddProd from '../Hooks/useAddProd'

const ItemCard = ({ product }) => {

    const {quantityPerItem} = useAddProd({product})


    return (
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.image} alt="" />
            <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{product.title}</span>
                <span className="float-right text-gray-400">x {quantityPerItem}</span>
                <p className="text-lg font-bold">${product.price}</p>
            </div>
        </div>
    )
}
export default ItemCard