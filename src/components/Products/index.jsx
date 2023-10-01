import { useEffect, useState } from "react"
import ProductsContainer from './ProductsContainer' 

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .finally(() =>
        setLoading(false))
  }, [])

 console.log(products)

  if (Loading) {
    return <h1 className="text-3xl text-center font-bold underline">Cargando...</h1>
  }

  if (products.length === 0) {
    return <h1 className="text-3xl text-center font-bold underline">No hay productos</h1>
  }

  // <h1 classNameName="text-3xl text-center font-bold underline">
  //   {gretting}
  // </h1>
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductsContainer
                key={product.id}
                product={product}
              />))}
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer