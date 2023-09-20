const ProductsContainer = ({ product }) => {
  return (
    <>
      <div className="hover:opacity-75 ">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-2 00 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={product.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <p aria-hidden="true" className="inset-0">
                  {product.name}
                  </p>
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.title}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsContainer