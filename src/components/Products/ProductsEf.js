const API_URL = 'https://fakestoreapi.com/products'

export const getListProducts = () => {
    return fetch(`${API_URL}`)
}

export const getProductById = (id) => {
    return fetch(`${API_URL}/${id}`)
}



