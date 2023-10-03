const Footer = () => {
    return (
        <footer>
            <div className="border-t border-gray-200">
                <div className="flex h-16 items-center">
                    {/* <!-- Flyout menus --> */}
                    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                        <div className="flex h-full mt-6 space-x-8">
                            <h1>hola</h1>
                        </div>
                    </div>

                    <div className="ml-auto flex items-center">
                        {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                        <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
                    </div> */}

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
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer