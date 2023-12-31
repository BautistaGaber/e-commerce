import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-around items-center px-48">
                <div>
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
                        <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that  care if you live or die.</p>
                    </div>
                    <div className="mt-10">
                        <Link to="/products" className="inline-block rounded-md border border-transparent bg-gray-900 px-8 py-3 text-center font-medium text-white">Products Collection</Link>
                    </div>
                </div>
                <div>
                    <div className="mt-1">
                        <div className="flex items-center space-x-6 lg:space-x-10">
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home