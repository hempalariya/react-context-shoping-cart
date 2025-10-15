import React from 'react'

export default function Header({dispatch, itemCount}) {
  return (
    <header>
        <h1>Context Cart</h1>
        <button onClick={() => {
          dispatch({type: 'cartOpen'})
        }}>
            Cart {itemCount}
        </button>
    </header>
  )
}
