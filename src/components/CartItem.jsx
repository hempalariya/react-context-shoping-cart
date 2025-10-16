import React, { useContext } from 'react'
import { CartContext } from '../store/shoping-cart-context'

export default function CartItem({item}) {
    console.log(item)
    const {dispatch} = useContext(CartContext)
  return (
    <div className="item">
                <div className="item-name">{item.product_name}</div>
                <div className="item-action">
                    <button onClick={() => {
                      dispatch({
                        type: 'itemQuantity',
                        payload: {
                          id: item.id,
                          add: -1
                        }
                      })
                    }}>-</button> <span>{item.quantity}</span>
                    <button onClick={() => {
                      dispatch({
                        type: 'itemQuantity',
                        payload: {
                          id: item.id,
                          add: 1
                        }
                      })
                    }}>+</button>
                </div>
            </div>
  )
}
