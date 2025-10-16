import React, { useContext } from 'react'

import { CartContext } from '../store/shoping-cart-context'

export default function Header() {

  const {cart, dispatch} = useContext(CartContext)

  return (
    <header>
        <h1>Context Cart</h1>
        <button onClick={() => {
          dispatch({type: 'cartOpen'})
        }}>
            Cart {cart.cartItems.length}
        </button>
    </header>
  )
}
