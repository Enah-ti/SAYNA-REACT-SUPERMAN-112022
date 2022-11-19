//Add product to cart

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload : product
    }
}

//delete item from cart
export const supprCart = (product) => {
    return{
        type: "ADDITEM",
        payload : product
    }
}