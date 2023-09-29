export const addToCart= (name, price)=>{
    return{
        type: 'ADD_TO_CART',
        name,
        price}
};