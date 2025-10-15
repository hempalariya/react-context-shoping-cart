import React from 'react'

export default function CartItem({item, dispatch}) {
    console.log(item)
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
