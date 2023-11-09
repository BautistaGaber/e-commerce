
import ProductsContainer from './ProductsCard'
import { useEffect, useState, memo } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore()
      const productsCollection = collection(db, 'products')

      getDocs(productsCollection)
        .then((querySnapshot) => {
          const productsData = []
          querySnapshot.forEach((doc) => {
            productsData.push({ id: doc.id, ...doc.data() })
          })
          setProducts(productsData)
        })
        .finally(() => setLoading(false))
    }, 2000)
  }, [])

  console.log(products)

  if (loading) {
    return (
      <div className="bg-white">
        <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="animate-pulse border bg-gray-400 shadow rounded-md p-4 max-w-sm w-full mx-auto h-16"></div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Array.from(new Array(20)).map(() => {
              return (
                <div key={crypto.randomUUID()} className="animate-pulse border bg-gray-400 shadow rounded-md p-4 max-w-sm w-full mx-auto h-96"></div>
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
      <div className="mx-auto max-w-2xl px-4 py-16 max-w-7xl px-8">
        <h2 className="flex justify-center text-5xl font-bold tracking-tight text-gray-900">All products</h2>
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