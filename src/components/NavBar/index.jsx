import { NavLink } from 'react-router-dom'
import { Brand } from './Brand'
import { CartWidget } from './CartWidget'
import { CategoryItem } from './CategoryItem'

const NavBar = () => {
    return (
        <div className="bg-white">
            <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-40 flex">
                    <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                        <div className="flex px-4 pb-2 pt-5">
                            <button type="button" className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Links --> */}
                        <div className="border-t border-gray-200 px-4 py-6">
                            <a href="#" className="-m-2 flex items-center p-2">
                                <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                <span className="sr-only">, change currency</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div >

            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"><marquee direction=""><span>Get free delivery on orders over $100</span></marquee></p>

                <nav aria-label="Top" className="mx-auto">
                    <div className="border-b border-gray-200 px-11">
                        <div className="flex h-16 items-center">
                            {/* <!-- Logo --> */}
                            <div className="ml-4 flex lg:ml-0">
                                <Brand />
                            </div>
                            {/* <!-- Flyout menus --> */}
                            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex  mt-6 space-x-8">
                                    <NavLink className="h-1" to="/"><CategoryItem name="Home" /></NavLink>
                                    {/* <NavLink><CategoryItem name="Mens" /></NavLink>
                                    <NavLink><CategoryItem name="Womens" /></NavLink> */}
                                    <NavLink to="/products"><CategoryItem name="Products" /></NavLink>
                                </div>
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                        <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                                        <span className="ml-3 block text-sm font-medium">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>

                                {/* <!-- Search --> */}
                                <div className="flex lg:ml-6">
                                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="group -m-2 flex items-center p-2">
                                    <NavLink className="flex" to="/products/cart"><CartWidget/></NavLink>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default NavBar