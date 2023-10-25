
import ProductsContainer from './ProductsCard'
import { useEffect, useState, memo } from 'react'
import { getListProducts } from './GetProducts'


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      getListProducts()
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .finally(() =>
          setLoading(false))
    }, 2000)
  }, [])

  console.log(products)

  if (Loading) {
    return (
      <div className="bg-white">
        <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="animate-pulse text-2xl font-bold tracking-tight text-gray-900"></h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Array.from(new Array(12)).map(() => {
              return (
                <div key={crypto.randomUUID()} className="animate-pulse border bg-gray-400 shadow rounded-md p-4 max-w-sm w-full mx-auto h-80"></div>                                               
              )
            })}
          </div>
        </div>
      </div>
    )
  }



  if (products.length === 0) {
    return <h1 className="text-3xl text-center font-bold underline">No hay productos</h1>
  }


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            products.map((product) => (
              <div key={product.id}>
                <ProductsContainer product={product} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
const MemoizedItemListContainer = memo(ItemListContainer)

export default MemoizedItemListContainer