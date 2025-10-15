import React from 'react'

export default function Cart({dispatch}) {
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
            <div className="item">
                <div className="item-name">Blue Floral Printed Cotton Top</div>
                <div className="item-action">
                    <button>-</button> <span>1</span>
                    <button>+</button>
                </div>
            </div>
            <div className="item">
                <div className="item-name">Blue Floral Printed Cotton Top</div>
                <div className="item-action">
                    <button>-</button> <span>1</span>
                    <button>+</button>
                </div>
            </div>
            <div className="item">
                <div className="item-name">Blue Floral Printed Cotton Top</div>
                <div className="item-action">
                    <button>-</button> <span>1</span>
                    <button>+</button>
                </div>
            </div>
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
