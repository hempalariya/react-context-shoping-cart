import React from 'react'


export default function Card({img}) {
  return (
    <div className="card">
        <div className="card-header">
          <img src={img} alt="No-Img" />
        </div>
        <div className="card-body">
          <h3>green hodied jacket</h3>
          <p className="price">Rs. 700</p>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            adipisci in consequuntur distinctio, perferendis repellat quas
            perspiciatis voluptatem mollitia! Alias.
          </p>
        </div>
          <div className="card-footer">
            <button>Add to Cart</button>
          </div>
      </div>
  )
}
