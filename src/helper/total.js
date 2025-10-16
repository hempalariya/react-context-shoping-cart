export function cartTotal(cart){

    let total = cart.reduce((sum, prod) => sum + prod.price * prod.quantity , 0)

    return total
}
   
