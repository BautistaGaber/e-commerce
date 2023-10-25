import useAddProd from '../Hooks/useAddProd'
import { useState, useEffect } from 'react'

const ProductsContainer = ({ product }) => {

  const { cart, addToCart } = useAddProd({ product })
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    const isProductInCart = cart.some((item) => item.id === product.id)
    setAddedToCart(isProductInCart)
  }, [cart, product.id])

  const handleAddToCart = () => {
    if (!addedToCart) {
      addToCart(product)
      setAddedToCart(true)
    }
  }

  return (
    <>
      <div className="my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl group' href={`/products/${product.id}`}>
          <img className='absolute top-0 right-0 h-full w-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer' src={product.image} alt="product image" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-full bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2 px-4">
            Ver Producto
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <div className='w-full h-24'>
            <h5 className="text-base tracking-tight text-slate-900">{product.title}</h5>
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">${product.price}</span>
            </p>
          </div>
          {<button className={`flex items-center justify-center w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ${addedToCart ? 'text-gray-500 pointer-events-none' : 'cursor-pointer'}`} onClick={handleAddToCart} disabled={addedToCart}>
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {addedToCart ? 'Producto agregado' : 'Agregar al carrito'}
          </button>}
        </div>
      </div>
    </>
  )
}

export default ProductsContainer