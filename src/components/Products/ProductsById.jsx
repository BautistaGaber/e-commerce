import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ProductById = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

     const productById = useParams()


    console.log(productById)

    useEffect(() => {
        setTimeout(() => {
        const fetchProduct = async () => {
          try {
            const db = getFirestore()
            const prodRef = doc(db, 'products', productById.id)
            const productSnapshot = await getDoc(prodRef)

            if (productSnapshot.exists()) {
              setProduct({ id: productSnapshot.id, ...productSnapshot.data() })
            }
          } catch (error) {
            console.error('Error al obtener el producto:', error)
          }  
        }
        fetchProduct().
        finally(() => setLoading(false))}, 2000)}
        ,[productById])

      
      console.log(product)


    if (loading) {
        return (
            <section className="overflow-hidden py-11 font-poppins bg-gray-100">
            <div className="max-w-5xl px-4 py-4 mx-auto">
                <div className="flex mx-4">
                    <div className="animate-pulse rounded-md border bg-gray-400 px-4 w-full"></div>
                    <div className="w-full px-4 w-1/2 my-8">
                        <div className="lg:pl-20">
                            <div className="mb-8 ">
                                <div className="animate-pulse rounded-md border bg-gray-400 w-12 h-5"></div>
                                <h2 className="animate-pulse rounded-md border bg-gray-400 w-full h-40 mt-4"></h2>                      
                                <div className="flex items-center mb-6 gap-2 mt-2">
                                    <div className="h-6 w-24 animate-pulse rounded-md border bg-gray-400 "></div>                                 
                                    <p className="h-6 w-32 animate-pulse rounded-md border bg-gray-400"></p>
                                </div>
                                <p className="h-24 animate-pulse rounded-md border bg-gray-400"></p>                        
                                <p className="h-14 mt-5 text-gray-900 animate-pulse rounded-md border bg-gray-400"></p>                    
                            </div>
                            <div className="h-12 animate-pulse rounded-md border bg-gray-400">            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }


    return (
        <section className="overflow-hidden py-11 font-poppins bg-gray-100">
            <div className="max-w-5xl px-4 py-4 mx-auto">
                <div className="flex mx-4">
                    <div className="w-full px-4 ">
                        <img src={product.image} alt="product image"
                            className="" />
                    </div>
                    <div className="w-full px-4 w-1/2 my-8">
                        <div className="lg:pl-20">
                            <div className="mb-8 ">
                                <span className="text-lg font-medium text-rose-500 ">New</span>
                                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold text-gray-900 md:text-4xl">
                                    {product.title}</h2>
                                <div className="flex items-center mb-6">
                                    <ul className="flex mr-2">
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    className="w-4 mr-1 text-red-500 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    className="w-4 mr-1 text-gray-900 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    className="w-4 mr-1 text-gray-900 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor"
                                                    className="w-4 mr-1 text-gray-900 bi bi-star "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-gray-900 ">(2 customer reviews)</p>
                                </div>
                                <p className="max-w-md mb-8 text-gray-900">
                                    {product.description}
                                </p>
                                <p className="inline-block text-4xl font-bold text-gray-900 ">
                                    <span>${product.price}</span>
                                    <span
                                        className="text-base font-normal  line-through text-gray-900">$1500.99</span>
                                </p>
                            </div>
                            <div className="flex items-center mb-8">
                                <h2 className="w-16 text-xl font-bold text-gray-900">
                                    Size:</h2>
                                <div className="flex flex-wrap -mx-2 -mb-2">
                                    <button
                                        className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 border-gray-900 hover:text-blue-600 hover:border-gray-900 text-gray-900">XL
                                    </button>
                                    <button
                                        className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 border-gray-900 hover:text-blue-600 hover:border-gray-900 text-gray-900">S
                                    </button>
                                    <button
                                        className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 border-gray-900 hover:text-blue-600 hover:border-gray-900 text-gray-900">M
                                    </button>
                                    <button
                                        className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 border-gray-900 hover:text-blue-600 hover:border-gray-900 text-gray-900">XS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductById