import React from 'react'


export default function Card({product, dispatch}) {
  return (
    <div className="card">
        <div className="card-header">
          <img src={product.image_url} alt="No-Img" />
        </div>
        <div className="card-body">
          <h3>{product.product_name}</h3>
          <p className="price">Rs. {product.price}</p>
          <p className="description">
            {product.description}
          </p>
        </div>
          <div className="card-footer">
            <button onClick={() => {
              dispatch({
                type: 'addToCart',
                payload: {...product}
              })
            }}>Add to Cart</button>
          </div>
      </div>
  )
}
