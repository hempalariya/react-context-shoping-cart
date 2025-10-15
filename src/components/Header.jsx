import React from 'react'

export default function Header({dispatch}) {
  return (
    <header>
        <h1>Context Cart</h1>
        <button onClick={() => {
          dispatch({type: 'cartOpen'})
        }}>
            Cart 0
        </button>
    </header>
  )
}
