import { useState, useEffect } from 'react'
import { getProductById } from './GetProducts'
import { useParams } from 'react-router-dom'

const ProductById = () => {
    const [product, setProduct] = useState([])
    const productById = useParams()

    useEffect(() => {
        getProductById(productById.id)
            .then((response) => response.json())
            .then((data) => setProduct(data))
    }, [productById])

    console.log(product)

    if (!product) {
        return <h1>Cargando....</h1>
    }


    return (
        <>
            <div className="fixed w-screen h-screen overflow-y-auto">
                <div className="flex min-h-full pt-20 items-start justify-center md:px-2 lg:px-4">
                    <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-5xl">
                        <div className="relative border flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <button type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                    <img src={product.image} alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center" />
                                </div>
                                <div className="sm:col-span-8 lg:col-span-7">
                                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>

                                    <section aria-labelledby="information-heading" className="mt-2">
                                        <p className="text-2xl font-bold text-gray-900 mt-12">${product.price}</p>
                                    </section>
                                    <section>
                                        <p className="text-xl text-gray-900 mt-16">{product.description}</p>
                                    </section>

                                    <section aria-labelledby="options-heading" className="mt-10">
                                        <form>
                                            <button type="submit" className="mt-24 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to Cart</button>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductById