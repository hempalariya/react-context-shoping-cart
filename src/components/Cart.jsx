import React from 'react'
import CartItem from './CartItem'

export default function Cart({dispatch, cart}) {
  return (<>
    <div className='blur' onClick={() => {
        dispatch({
            type: 'cartClose'
        })
    }}>

    </div>

    <div className="cart">
        <div className="cart-header">
            <h3>Cart</h3>
        </div>
        <div className="cart-items">
            {
                cart.map((item) => {
                    return <CartItem item = {item} dispatch = {dispatch}/>
                })
            }
        </div>
        <div className="cart-total">
            <p>Cart total: 2999/-</p>
        </div>
        <div className="cart-footer">
            <button>Checkout</button>
        </div>
    </div>
  
  </>
    
  )
}
